import React, { useEffect, useState } from 'react';

const exampleReports = [
  {
    url: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
    location: 'Central Park',
    description: 'Plastic bottles found near the bench.',
    reporter: 'Alice',
    date: '2025-08-20',
    status: 'Verified'
  },
  {
    url: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80',
    location: 'Main Street',
    description: 'Overflowing trash can.',
    reporter: 'Bob',
    date: '2025-08-21',
    status: 'Accepted'
  },
  {
    url: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
    location: 'River Side',
    description: 'Trash thrown in water.',
    reporter: 'You',
    date: '2025-08-22',
    status: 'Rejected'
  }
];

const Reports = ({ user }) => {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem('myReports');
    let myReports = [];
    if (stored) {
      myReports = JSON.parse(stored);
    }
    // Add random status to user's reports if not present
    myReports = myReports.map(r => ({
      ...r,
      status: r.status || ['Verified', 'Accepted', 'Rejected'][Math.floor(Math.random()*3)]
    }));
    setReports([...myReports, ...exampleReports]);
  }, []);

  const handleDelete = idx => {
    const updated = [...reports];
    updated.splice(idx, 1);
    setReports(updated);
    // Only update localStorage for user's own reports
    const userReports = updated.filter(r => r.reporter === 'You');
    localStorage.setItem('myReports', JSON.stringify(userReports));
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '2rem', fontSize: '2.2rem', letterSpacing: '1px' }}>My Reports</h2>
      {reports.length === 0 ? (
        <p style={{ textAlign: 'center', fontSize: '1.1rem', color: '#888' }}>No reports yet.</p>
      ) : (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2.5rem', justifyContent: 'center' }}>
          {reports.map((r, idx) => (
            <div key={idx} className="card" style={{ minWidth: '260px', maxWidth: '260px', position: 'relative', padding: 0 }}>
              <img src={r.url} alt={r.description} style={{ width: '100%', height: '160px', objectFit: 'cover', borderRadius: '12px 12px 0 0' }} />
              <div style={{ padding: '1rem', fontSize: '1rem', textAlign: 'left' }}>
                <div style={{ marginBottom: '0.5rem' }}><strong>Location:</strong> {r.location}</div>
                <div style={{ marginBottom: '0.5rem' }}><strong>Description:</strong> {r.description}</div>
                <div style={{ marginBottom: '0.5rem' }}><strong>Reporter:</strong> <span style={{ color: '#2e7d32' }}>{r.reporter || (user && user.name) || 'You'}</span></div>
                <div style={{ marginBottom: '0.5rem' }}><strong>Date:</strong> <span style={{ fontSize: '0.95rem', color: '#888' }}>{r.date}</span></div>
                <div style={{ marginBottom: '0.5rem' }}>
                  <strong>Status:</strong> <span style={{
                    color: r.status === 'Verified' ? '#388e3c' : r.status === 'Accepted' ? '#1976d2' : '#e53935',
                    fontWeight: 600
                  }}>{r.status}</span>
                </div>
              </div>
              {r.reporter === 'You' && (
                <button onClick={() => handleDelete(idx)} style={{ position: 'absolute', top: '14px', right: '14px', background: '#e53935', color: 'white', border: 'none', borderRadius: '6px', padding: '0.3rem 0.8rem', cursor: 'pointer', fontWeight: 600, fontSize: '0.95rem', boxShadow: '0 2px 8px rgba(229,57,53,0.12)' }}>Delete</button>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Reports;
