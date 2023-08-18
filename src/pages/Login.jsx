import React, { useState } from 'react';
import './Login.css';
import TopBar from '../components/molecules/TopBar';
import NavBar from '../components/molecules/NavBar';  

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    // For now
    console.log('Email:', email);
    console.log('Password:', password);

    // Clear fields
    setEmail('');
    setPassword('');
  };

  return (
    <div>
        <TopBar />
        <div className="login-container">
        
      <h1>Login</h1>
      <div className="input-container">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
        />
      </div>
      <div className="input-container">
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
        />
      </div>
      <button className="login-button" onClick={handleLogin}>
        Login
      </button>
    </div>
    <NavBar />
    </div>
  );
};

export default Login;