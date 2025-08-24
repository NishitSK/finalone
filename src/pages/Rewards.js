import React, { useState, useEffect } from 'react';

const initialVouchers = [
  { code: 'CLEAN2025', value: '₹100', status: 'Active', description: 'Amazon Gift Card' },
  { code: 'GREEN50', value: '₹50', status: 'Used', description: 'Flipkart Voucher' }
];

const Rewards = () => {
  const [vouchers, setVouchers] = useState([]);

  useEffect(() => {
    // Load user's vouchers from localStorage or backend
    const stored = localStorage.getItem('myVouchers');
    let myVouchers = [];
    if (stored) {
      myVouchers = JSON.parse(stored);
    }
    setVouchers([...myVouchers, ...initialVouchers]);
  }, []);

  return (
    <div style={{ padding: '2rem', maxWidth: '700px', margin: '0 auto' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '2rem', fontSize: '2rem', letterSpacing: '1px' }}>Rewards & Vouchers</h2>
      <div className="card" style={{ background: '#e8f5e9', minHeight: '120px' }}>
        {vouchers.length === 0 ? (
          <p style={{ color: '#888', textAlign: 'center' }}>No vouchers earned yet.</p>
        ) : (
          vouchers.map((v, idx) => (
            <div key={idx} style={{ marginBottom: '1.2rem', borderBottom: '1px solid #eee', paddingBottom: '0.5rem' }}>
              <span style={{ color: '#2e7d32', fontWeight: 600 }}>Voucher:</span> {v.code} <br />
              <span><strong>Value:</strong> {v.value}</span> <br />
              <span><strong>Status:</strong> {v.status}</span> <br />
              <span><strong>Description:</strong> {v.description}</span>
            </div>
          ))
        )}
      </div>
      <p style={{ marginTop: '2rem', color: '#388e3c', textAlign: 'center', fontSize: '1.1rem' }}>
        Earn vouchers for every successful and verified report you upload!
      </p>
    </div>
  );
};

export default Rewards;
