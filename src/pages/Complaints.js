import React, { useState } from 'react';

const Complaints = () => {
  const [complaints, setComplaints] = useState([]);
  const [input, setInput] = useState('');
  const [category, setCategory] = useState('General');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      setComplaints([
        ...complaints,
        { text: input, category, date: new Date().toLocaleString() }
      ]);
      setInput('');
      setCategory('General');
    }
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '700px', margin: '0 auto' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '2rem', fontSize: '2rem', letterSpacing: '1px' }}>Complaints</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'stretch', marginBottom: '2rem' }}>
        <select value={category} onChange={e => setCategory(e.target.value)} style={{ padding: '0.5rem 1rem', borderRadius: '6px', border: '1px solid #c8e6c9', background: '#fff' }}>
          <option value="General">General</option>
          <option value="Add Dustbins">Request to Add Dustbins</option>
          <option value="App Issue">Problem with the App</option>
          <option value="Other">Other</option>
        </select>
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Describe your complaint..."
          style={{ flex: 1 }}
        />
        <button type="submit">Submit</button>
      </form>
      <div className="card" style={{ background: '#fffde7', minHeight: '120px', marginBottom: '2rem' }}>
        {complaints.length === 0 ? (
          <p style={{ color: '#888', textAlign: 'center' }}>No complaints submitted yet.</p>
        ) : (
          complaints.map((c, idx) => (
            <div key={idx} style={{ marginBottom: '1rem', borderBottom: '1px solid #eee', paddingBottom: '0.5rem' }}>
              <span style={{ color: '#e53935', fontWeight: 600 }}>{c.category}:</span> {c.text}<br />
              <span style={{ fontSize: '0.9rem', color: '#888' }}>{c.date}</span>
            </div>
          ))
        )}
      </div>

      <div className="card" style={{ background: '#e3f2fd' }}>
        <h3 style={{ marginTop: 0, marginBottom: '1rem', color: '#1b5e20' }}>Frequently Asked Questions</h3>
        <ul style={{ margin: 0, paddingLeft: '1.5rem', fontSize: '1rem' }}>
          <li><strong>How do I report a waste disposal incident?</strong><br />Go to the Upload page and submit a photo or video with details.</li>
          <li><strong>How can I request more dustbins in my area?</strong><br />Select "Request to Add Dustbins" in the complaints form and specify the location.</li>
          <li><strong>Who can see my reports?</strong><br />Only you and the community can view reports in the Reports and Community pages.</li>
          <li><strong>How do I join a cleaning movement?</strong><br />Visit the Community page and join the chat group for upcoming events.</li>
          <li><strong>How do I contact support?</strong><br />Use the Complaints form or email us at wastewatch@example.com.</li>
        </ul>
      </div>
    </div>
  );
};

export default Complaints;
