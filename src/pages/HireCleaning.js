import React, { useState } from 'react';

const HireCleaning = () => {
  const [hires, setHires] = useState([]);
  const [location, setLocation] = useState('');
  const [details, setDetails] = useState('');
  const [budget, setBudget] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (location.trim() && details.trim() && budget.trim()) {
      setHires([
        ...hires,
        {
          location,
          details,
          budget,
          date: new Date().toLocaleString(),
          status: 'Open'
        }
      ]);
      setLocation('');
      setDetails('');
      setBudget('');
    }
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '700px', margin: '0 auto' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '2rem', fontSize: '2rem', letterSpacing: '1px' }}>Hire for Cleaning</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
        <input
          type="text"
          value={location}
          onChange={e => setLocation(e.target.value)}
          placeholder="Location to be cleaned"
          required
        />
        <textarea
          value={details}
          onChange={e => setDetails(e.target.value)}
          placeholder="Details about the cleaning job"
          rows={3}
          required
        />
        <input
          type="text"
          value={budget}
          onChange={e => setBudget(e.target.value)}
          placeholder="Budget (e.g., ₹500)"
          required
        />
        <button type="submit">Post Cleaning Job</button>
      </form>
      <div className="card" style={{ background: '#f1f8e9', minHeight: '120px' }}>
        <h3 style={{ marginTop: 0, color: '#1b5e20' }}>Open Cleaning Jobs</h3>
        {hires.length === 0 ? (
          <p style={{ color: '#888', textAlign: 'center' }}>No cleaning jobs posted yet.</p>
        ) : (
          hires.map((h, idx) => (
            <div key={idx} style={{ marginBottom: '1.2rem', borderBottom: '1px solid #eee', paddingBottom: '0.5rem' }}>
              <strong>Location:</strong> {h.location}<br />
              <strong>Details:</strong> {h.details}<br />
              <strong>Budget:</strong> {h.budget}<br />
              <strong>Date Posted:</strong> {h.date}<br />
              <strong>Status:</strong> <span style={{ color: '#388e3c' }}>{h.status}</span>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default HireCleaning;
