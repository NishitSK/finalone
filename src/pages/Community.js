import React, { useState } from 'react';

const initialMessages = [
  { user: 'Alice', text: 'Let’s organize a park cleaning this Saturday!' },
  { user: 'Bob', text: 'I’m in! What time?' },
  { user: 'Charlie', text: 'Can we do it at 10am?' }
];

const Community = () => {
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState('');

  const handleSend = (e) => {
    e.preventDefault();
    if (input.trim()) {
      setMessages([...messages, { user: 'You', text: input }]);
      setInput('');
    }
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '700px', margin: '0 auto' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '2rem', fontSize: '2rem', letterSpacing: '1px' }}>Community Cleaning Movements</h2>
      <div className="card" style={{ minHeight: '250px', marginBottom: '2rem', background: '#f9fbe7' }}>
        {messages.map((msg, idx) => (
          <div key={idx} style={{ marginBottom: '0.75rem', display: 'flex', alignItems: 'flex-start' }}>
            <div style={{
              background: msg.user === 'You' ? '#c8e6c9' : '#fff',
              borderRadius: '8px',
              padding: '0.7rem 1rem',
              boxShadow: '0 1px 4px rgba(46,125,50,0.07)',
              minWidth: '80px',
              maxWidth: '80%',
              marginLeft: msg.user === 'You' ? 'auto' : '0',
              marginRight: msg.user === 'You' ? '0' : 'auto',
            }}>
              <strong style={{ color: '#388e3c' }}>{msg.user}:</strong> <span>{msg.text}</span>
            </div>
          </div>
        ))}
      </div>
      <form onSubmit={handleSend} style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Type your message..."
          style={{ flex: 1 }}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Community;
