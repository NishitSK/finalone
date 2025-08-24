import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';

const navStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '2.5rem',
  padding: '1.2rem 0',
  background: 'rgba(46,125,50,0.92)',
  color: 'white',
  position: 'sticky',
  top: 0,
  zIndex: 100,
  boxShadow: '0 8px 32px rgba(46,125,50,0.10)',
  backdropFilter: 'blur(8px)',
  borderBottom: '1px solid #c8e6c9',
};

const linkStyle = {
  color: 'white',
  textDecoration: 'none',
  fontSize: '1.2rem',
  fontWeight: 500,
  position: 'relative',
  transition: 'color 0.3s',
  opacity: 0,
  animation: 'fadeIn 1s forwards',
};

const activeStyle = {
  borderBottom: '2px solid #fff',
  paddingBottom: '0.2rem',
};

const Navbar = () => {
  const location = useLocation();
  return (
    <nav style={navStyle}>
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .nav-link:hover {
          color: #a5d6a7 !important;
          text-shadow: 0 2px 8px #90caf9;
          transform: scale(1.08);
        }
      `}</style>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem', marginRight: '2.5rem' }}>
        <img src={logo} alt="Waste Watch Logo" style={{ height: '38px', width: '38px', borderRadius: '50%', boxShadow: '0 2px 8px #90caf9', background: '#fff' }} />
        <span style={{ fontWeight: 800, fontSize: '1.5rem', letterSpacing: '1px', color: '#fff', textShadow: '0 2px 8px #90caf9' }}>Waste Watch</span>
      </div>
      <Link
        to="/"
        className="nav-link"
        style={{ ...linkStyle, ...(location.pathname === '/' ? activeStyle : {}), animationDelay: '0.1s' }}
      >Home</Link>
      <Link
        to="/upload"
        className="nav-link"
        style={{ ...linkStyle, ...(location.pathname === '/upload' ? activeStyle : {}), animationDelay: '0.3s' }}
      >Upload</Link>
      <Link
        to="/reports"
        className="nav-link"
        style={{ ...linkStyle, ...(location.pathname === '/reports' ? activeStyle : {}), animationDelay: '0.5s' }}
      >Reports</Link>
      <Link
        to="/community"
        className="nav-link"
        style={{ ...linkStyle, ...(location.pathname === '/community' ? activeStyle : {}), animationDelay: '0.7s' }}
      >Community</Link>
      <Link
        to="/complaints"
        className="nav-link"
        style={{ ...linkStyle, ...(location.pathname === '/complaints' ? activeStyle : {}), animationDelay: '0.9s' }}
      >Complaints</Link>
      <Link
        to="/about"
        className="nav-link"
        style={{ ...linkStyle, ...(location.pathname === '/about' ? activeStyle : {}), animationDelay: '1.1s' }}
      >About Us</Link>
      <Link
        to="/rewards"
        className="nav-link"
        style={{ ...linkStyle, ...(location.pathname === '/rewards' ? activeStyle : {}), animationDelay: '1.3s' }}
      >Rewards</Link>
      <Link
        to="/hire-cleaning"
        className="nav-link"
        style={{ ...linkStyle, ...(location.pathname === '/hire-cleaning' ? activeStyle : {}), animationDelay: '1.5s' }}
      >Hire for Cleaning</Link>
    </nav>
  );
};

export default Navbar;
