// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//       <div style={{ textAlign: "center" }}>
//           <h1>Welcome to My React App!</h1>
//           <p>Deploy this app to the cloud and access it anywhere.</p>
//       </div>
//   );
// }

// export default App;


import React, { useState } from 'react';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!username || !password || !role) {
      setError('Please fill in all fields!');
      return;
    }

    setError('');
    console.log('Login Successful');
    console.log(`Username: ${username}, Role: ${role}`);
    alert(`Logged in as ${role}`);
  };

  return (
    <div className="App">
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: '0 auto' }}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username"
            required
          />
        </div>

        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
        </div>

        <div>
          <label>Role:</label>
          <label>
            <input
              type="radio"
              name="role"
              value="User"
              checked={role === 'User'}
              onChange={(e) => setRole(e.target.value)}
            />
            User
          </label>
          <label>
            <input
              type="radio"
              name="role"
              value="Admin"
              checked={role === 'Admin'}
              onChange={(e) => setRole(e.target.value)}
            />
            Admin
          </label>
        </div>

        {error && <p style={{ color: 'red' }}>{error}</p>}

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default App;
