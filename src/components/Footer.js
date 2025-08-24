import React from 'react';

const Footer = () => (
  <footer style={{
    width: '100%',
    background: 'rgba(255,255,255,0.85)',
    color: '#222',
    padding: '2.2rem 0 1.2rem 0',
    textAlign: 'center',
    marginTop: '3rem',
    borderTop: '1px solid #c8e6c9',
    fontSize: '1.05rem',
    boxShadow: '0 -8px 32px rgba(46,125,50,0.10)',
    backdropFilter: 'blur(8px)',
    borderRadius: '0 0 18px 18px',
  }}>
    <div style={{ marginBottom: '1rem', fontWeight: 700, fontSize: '1.15rem', color: '#388e3c', letterSpacing: '0.5px' }}>
      <img src="https://img.icons8.com/color/32/000000/recycle.png" alt="Logo" style={{ verticalAlign: 'middle', marginRight: '0.5rem', borderRadius: '50%' }} />
      Waste Watch &copy; {new Date().getFullYear()} &mdash; All rights reserved.
    </div>
    <div style={{ marginBottom: '0.5rem', color: '#2e7d32' }}>
      <span>Contact: <a href="mailto:wastewatch@example.com" style={{ color: '#388e3c', fontWeight: 600 }}>wastewatch@example.com</a></span>
    </div>
    <div style={{ display: 'flex', justifyContent: 'center', gap: '1.2rem', marginTop: '0.5rem' }}>
      <a href="#" style={{ color: '#388e3c', fontSize: '1.2rem' }} title="Instagram">
        <img src="https://img.icons8.com/color/28/000000/instagram-new.png" alt="Instagram" style={{ verticalAlign: 'middle', borderRadius: '8px' }} />
      </a>
      <a href="#" style={{ color: '#388e3c', fontSize: '1.2rem' }} title="Twitter">
        <img src="https://img.icons8.com/color/28/000000/twitter.png" alt="Twitter" style={{ verticalAlign: 'middle', borderRadius: '8px' }} />
      </a>
      <a href="#" style={{ color: '#388e3c', fontSize: '1.2rem' }} title="Facebook">
        <img src="https://img.icons8.com/color/28/000000/facebook-new.png" alt="Facebook" style={{ verticalAlign: 'middle', borderRadius: '8px' }} />
      </a>
    </div>
  </footer>
);

export default Footer;
