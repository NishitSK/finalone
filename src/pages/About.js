import React from 'react';

const About = () => (
  <div style={{ padding: '2rem', maxWidth: '700px', margin: '0 auto' }}>
    <h2 style={{ textAlign: 'center', marginBottom: '2rem', fontSize: '2rem', letterSpacing: '1px' }}>About Us</h2>
    <div className="card" style={{ background: '#e3f2fd' }}>
      <p style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>
        <strong>Waste Watch</strong> is a community-driven platform dedicated to keeping public spaces clean and safe. Our mission is to empower citizens to report waste disposal incidents, organize cleaning movements, and raise awareness about environmental responsibility.
      </p>
      <p style={{ fontSize: '1.05rem' }}>
        <strong>Features:</strong>
        <ul style={{ margin: '1rem 0 0 1.5rem', fontSize: '1rem' }}>
          <li>Report waste disposal with photos or videos</li>
          <li>View and manage your reports</li>
          <li>Join community cleaning movements</li>
          <li>Submit complaints and feedback</li>
        </ul>
      </p>
      <p style={{ fontSize: '1.05rem', marginTop: '1rem' }}>
        <strong>How fines are distributed:</strong><br />
        When a perpetrator pays a fine, a portion of the amount is given as a reward to the person who reported and provided evidence of the act. The remaining amount is allocated for community cleaning initiatives and maintenance of public spaces. This ensures both individual motivation and collective benefit for a cleaner environment.
      </p>
      <p style={{ fontSize: '1.05rem', marginTop: '1rem' }}>
        <strong>Contact:</strong> wastewatch@example.com
      </p>
    </div>
  </div>
);

export default About;
