import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Input } from '@mui/material';

import { loggin } from '../constant/data';

function Login() {
  const navigateTo = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username === loggin.username && password === loggin.password) {
      loggin.loggedIn = true;
      navigateTo('/');
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <Input 
        placeholder="Username" 
        onChange={(e) => {setUsername(e.target.value)}}
      />
      <br />
      <Input 
        placeholder="Password" 
        type="password" 
        onChange={(e) => {setPassword(e.target.value)}}
      />
      <br />
      <Button onClick={handleLogin}>Login</Button>
    </div>
  );
};

export default Login;