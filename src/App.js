
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Upload from './pages/Upload';
import Reports from './pages/Gallery';
import Community from './pages/Community';
import Complaints from './pages/Complaints';
import About from './pages/About';
import Rewards from './pages/Rewards';
import HireCleaning from './pages/HireCleaning';
import Footer from './components/Footer';
import { GoogleOAuthProvider } from '@react-oauth/google';

function App() {
  const [user, setUser] = useState(null);
  return (
    <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID_HERE">{/* Replace with your actual client ID */}
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', position: 'relative' }}>
        <div className="animated-bg" />
        <Router>
          <Navbar />
          <main className="glass" style={{ flex: 1, margin: '2.5rem auto 0 auto', maxWidth: '1100px', width: '98%', boxSizing: 'border-box', boxShadow: '0 8px 32px rgba(46,125,50,0.12)', padding: '2rem 1.5rem', borderRadius: '18px', backdropFilter: 'blur(8px)', animation: 'fadeInMain 1.2s cubic-bezier(.77,0,.18,1)' }}>
            <Routes>
              <Route path="/" element={<Home user={user} />} />
              <Route path="/login" element={<Login setUser={setUser} />} />
              <Route path="/upload" element={<Upload />} />
              <Route path="/reports" element={<Reports user={user} />} />
              <Route path="/community" element={<Community />} />
              <Route path="/complaints" element={<Complaints />} />
              <Route path="/about" element={<About />} />
              <Route path="/rewards" element={<Rewards />} />
              <Route path="/hire-cleaning" element={<HireCleaning />} />
            </Routes>
          </main>
          <Footer />
        </Router>
      </div>
    </GoogleOAuthProvider>
  );
}

export default App;
