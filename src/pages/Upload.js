import React, { useState } from 'react';

const Upload = () => {
  const [media, setMedia] = useState(null);
  const [preview, setPreview] = useState(null);
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [mode, setMode] = useState(''); // 'camera' or 'gallery'
  const [stream, setStream] = useState(null);
  const videoRef = React.useRef(null);

  // Handle file upload (image/video)
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setMedia(file);
    setPreview(URL.createObjectURL(file));
  };

  // Handle live camera capture
  const startCamera = async () => {
    setMode('camera');
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      try {
        const s = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
        setStream(s);
        if (videoRef.current) {
          videoRef.current.srcObject = s;
        }
      } catch (err) {
        alert('Camera access denied or not available.');
      }
    }
  };

  // Take snapshot from video
  const capturePhoto = () => {
    if (videoRef.current) {
      const canvas = document.createElement('canvas');
      canvas.width = videoRef.current.videoWidth;
      canvas.height = videoRef.current.videoHeight;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
      canvas.toBlob(blob => {
        setMedia(blob);
        setPreview(URL.createObjectURL(blob));
      }, 'image/jpeg');
    }
  };

  // Stop camera stream
  const stopCamera = () => {
    if (stream) {
      stream.getTracks().forEach(track => track.stop());
      setStream(null);
    }
    setMode('');
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    // Save report to localStorage
    let url = preview;
    if (media && media instanceof Blob) {
      url = URL.createObjectURL(media);
    }
    const newReport = {
      url,
      location,
      description,
      reporter: 'You',
      date: new Date().toISOString().slice(0, 10)
    };
    const stored = localStorage.getItem('myReports');
    let myReports = [];
    if (stored) {
      myReports = JSON.parse(stored);
    }
    myReports.unshift(newReport);
    localStorage.setItem('myReports', JSON.stringify(myReports));
    alert('Report submitted and saved!');
    setMedia(null);
    setPreview(null);
    setLocation('');
    setDescription('');
    stopCamera();
    setMode('');
  };

  return (
    <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h2>Report Waste Disposal</h2>
      <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
        <button
          style={{ padding: '0.5rem 1.5rem', borderRadius: '8px', background: mode === 'camera' ? '#2e7d32' : '#388e3c', color: 'white', border: 'none', cursor: 'pointer' }}
          onClick={startCamera}
        >Live Camera</button>
        <button
          style={{ padding: '0.5rem 1.5rem', borderRadius: '8px', background: mode === 'gallery' ? '#2e7d32' : '#388e3c', color: 'white', border: 'none', cursor: 'pointer' }}
          onClick={() => { stopCamera(); setMode('gallery'); }}
        >Upload from Gallery</button>
      </div>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '100%', maxWidth: '400px' }}>
        {mode === 'gallery' && (
          <input
            type="file"
            accept="image/*,video/*"
            onChange={handleFileChange}
            required
            style={{ marginBottom: '1rem' }}
          />
        )}
        {mode === 'camera' && (
          <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
            <video ref={videoRef} autoPlay playsInline style={{ maxWidth: '300px', borderRadius: '8px' }} />
            <div style={{ marginTop: '1rem' }}>
              <button type="button" onClick={capturePhoto} style={{ padding: '0.5rem 1.5rem', borderRadius: '8px', background: '#2e7d32', color: 'white', border: 'none', cursor: 'pointer', marginRight: '1rem' }}>Capture Photo</button>
              <button type="button" onClick={stopCamera} style={{ padding: '0.5rem 1.5rem', borderRadius: '8px', background: '#888', color: 'white', border: 'none', cursor: 'pointer' }}>Stop Camera</button>
            </div>
          </div>
        )}
        {preview && (
          <div style={{ textAlign: 'center' }}>
            {/* Show image or video preview */}
            {media && media.type && media.type.startsWith('video') ? (
              <video src={preview} controls style={{ maxWidth: '300px', margin: '1rem 0' }} />
            ) : (
              <img src={preview} alt="Preview" style={{ maxWidth: '300px', margin: '1rem 0' }} />
            )}
          </div>
        )}
        <input
          type="text"
          placeholder="Location (e.g., Park, Street)"
          value={location}
          onChange={e => setLocation(e.target.value)}
          required
        />
        <textarea
          placeholder="Description (e.g., what happened, time, etc.)"
          value={description}
          onChange={e => setDescription(e.target.value)}
          rows={3}
          required
        />
        <button type="submit" style={{ padding: '0.75rem 2rem', fontSize: '1rem', borderRadius: '8px', background: '#2e7d32', color: 'white', border: 'none', cursor: 'pointer' }}>Report</button>
      </form>
    </div>
  );
};

export default Upload;
