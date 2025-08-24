import React from 'react';
import { useNavigate } from 'react-router-dom';

function Reel({ perpetrators }) {
  const [index, setIndex] = React.useState(0);
  React.useEffect(() => {
    const timer = setInterval(() => {
      setIndex(i => (i + 1) % perpetrators.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [perpetrators.length]);
  const p = perpetrators[index];
  return (
    <div style={{
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '340px', width: '100%',
      animation: 'fadeInMain 0.8s'
    }}>
      <video src={p.video} controls preload="metadata" style={{ maxWidth: '320px', borderRadius: '8px', marginBottom: '1rem', boxShadow: '0 2px 8px rgba(46,125,50,0.08)' }} />
      <strong style={{ fontSize: '1.1rem' }}>{p.name}</strong>
      <span style={{ color: '#2e7d32', fontWeight: 500 }}>{p.location}</span>
      <span style={{ fontSize: '0.95rem', color: '#888', marginBottom: '0.5rem' }}>{p.date}</span>
    </div>
  );
}

const perpetrators = [
  {
    name: 'John Doe',
    location: 'Central Park',
    date: '2025-08-21',
    video: 'https://www.w3schools.com/html/mov_bbb.mp4',
  },
  {
    name: 'Jane Smith',
    location: 'Main Street',
    date: '2025-08-22',
    video: 'https://www.w3schools.com/html/movie.mp4',
  },
  {
    name: 'Alex Lee',
    location: 'River Side',
    date: '2025-08-23',
    video: 'https://www.w3schools.com/html/mov_bbb.mp4',
  },
];

const Home = ({ user }) => {
  const navigate = useNavigate();
  return (
    <div style={{
      padding: '3rem',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '60vh',
      textAlign: 'center',
      position: 'relative',
    }}>
      <div style={{
        width: '100%',
        maxWidth: '700px',
        marginBottom: '2rem',
        background: 'linear-gradient(90deg, #e3f2fd 0%, #f1f8e9 100%)',
        borderRadius: '16px',
        boxShadow: '0 2px 12px rgba(46,125,50,0.08)',
        padding: '2rem 1rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        animation: 'fadeInMain 1.2s cubic-bezier(.77,0,.18,1)'
      }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem', color: '#1b5e20' }}>Waste Watch</h1>
        <p style={{ fontSize: '1.2rem', color: '#388e3c', marginBottom: '1rem' }}>
          Join the movement for a cleaner, greener community!
        </p>
        <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', marginBottom: '1rem', flexWrap: 'wrap' }}>
          <div style={{ background: '#fff', borderRadius: '12px', boxShadow: '0 2px 8px rgba(46,125,50,0.08)', padding: '1rem 2rem', minWidth: '120px' }}>
            <strong style={{ color: '#388e3c', fontSize: '1.3rem' }}>2,500+</strong><br />Reports Submitted
          </div>
          <div style={{ background: '#fff', borderRadius: '12px', boxShadow: '0 2px 8px rgba(46,125,50,0.08)', padding: '1rem 2rem', minWidth: '120px' }}>
            <strong style={{ color: '#388e3c', fontSize: '1.3rem' }}>1,200+</strong><br />Rewards Earned
          </div>
          <div style={{ background: '#fff', borderRadius: '12px', boxShadow: '0 2px 8px rgba(46,125,50,0.08)', padding: '1rem 2rem', minWidth: '120px' }}>
            <strong style={{ color: '#388e3c', fontSize: '1.3rem' }}>800+</strong><br />Cleanups Organized
          </div>
        </div>
        <div style={{ marginTop: '1rem', fontSize: '1.1rem', color: '#1976d2' }}>
          <span role="img" aria-label="tip">💡</span> Tip: Upload clear photos or videos for faster verification and bigger rewards!
        </div>
      </div>
      {user ? (
        <div style={{
          background: '#e8f5e9',
          border: '2px solid #2e7d32',
          borderRadius: '12px',
          padding: '1.5rem',
          marginBottom: '2rem',
          minWidth: '300px',
          boxShadow: '0 2px 8px rgba(46,125,50,0.08)'
        }}>
          <h2 style={{ margin: 0 }}>{user.name}</h2>
          <p style={{ margin: '0.5rem 0 0 0' }}>{user.details}</p>
        </div>
      ) : (
        <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
          <button
            style={{ padding: '0.75rem 2rem', fontSize: '1rem', borderRadius: '8px', background: '#2e7d32', color: 'white', border: 'none', cursor: 'pointer' }}
            onClick={() => navigate('/login')}
          >Login</button>
          <button style={{ padding: '0.75rem 2rem', fontSize: '1rem', borderRadius: '8px', background: '#388e3c', color: 'white', border: 'none', cursor: 'pointer' }}>Sign Up</button>
        </div>
      )}
      <p style={{ maxWidth: '500px', marginBottom: '2rem', fontSize: '1.1rem', color: '#555' }}>
        Welcome to Waste Watch! Help us keep public spaces clean by reporting improper waste disposal. Explore reports, join the community, earn rewards, and make a difference!
      </p>
      {user && (
        <div style={{ width: '100%', maxWidth: '600px', background: '#fff', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', padding: '1rem', marginTop: '2rem' }}>
          <div style={{ color: '#e53935', fontWeight: 600, marginBottom: '1rem', fontSize: '1rem', textAlign: 'center' }}>
            If you want your video to be removed, pay the fine.
          </div>
          <h3 style={{ marginTop: 0 }}>Perpetrators This Week</h3>
          <div style={{
            height: '340px',
            overflow: 'hidden',
            position: 'relative',
            borderRadius: '12px',
            boxShadow: '0 2px 8px rgba(46,125,50,0.08)',
            background: '#f1f8e9',
            marginTop: '1rem'
          }}>
            <Reel perpetrators={perpetrators} />
          </div>
        </div>
      )}

    </div>
  );
};

export default Home;
