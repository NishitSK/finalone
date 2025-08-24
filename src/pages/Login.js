import React from 'react';
import { useNavigate } from 'react-router-dom';
import { GoogleLogin, googleLogout } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';

const GOOGLE_CLIENT_ID = 'YOUR_GOOGLE_CLIENT_ID_HERE'; // Replace with your actual client ID

const Login = ({ setUser }) => {
  const navigate = useNavigate();

  const handleGoogleSuccess = (credentialResponse) => {
    if (credentialResponse.credential) {
  const decoded = jwtDecode(credentialResponse.credential);
      setUser({
        name: decoded.name,
        details: decoded.email,
        picture: decoded.picture
      });
      navigate('/');
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '60vh', padding: '2rem' }}>
      <h2>Login</h2>
      <div style={{ marginTop: '2rem' }}>
        <GoogleLogin
          onSuccess={handleGoogleSuccess}
          onError={() => alert('Google Login Failed')}
        />
      </div>
      <button
        style={{ marginTop: '2rem', padding: '0.75rem 2rem', fontSize: '1rem', borderRadius: '8px', background: '#388e3c', color: 'white', border: 'none', cursor: 'pointer' }}
        onClick={() => {
          setUser({ name: 'Guest', details: 'Guest User' });
          navigate('/');
        }}
      >Continue as Guest</button>
      <p style={{ marginTop: '2rem', color: '#888', fontSize: '0.9rem' }}>
        Use your Google account to login or continue as guest.
      </p>
    </div>
  );
};

export default Login;
