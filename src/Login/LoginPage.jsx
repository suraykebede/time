import React, { useState } from 'react';
import {
  TextField,
  Button,
  Typography,
  Container,
  Grid,
  Box,
} from '@mui/material';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    // Handle login logic here
    console.log('Login pressed');
  };

  return (
    <Container
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        // backgroundColor: '#F8FAFC',
      }}
    >
      {/* Placeholder for the logo */}
      <Box
        sx={{
          width: 64,
          height: 64,
          borderRadius: '50%',
          backgroundColor: '#E0E7FF',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: 3,
        }}
      >
        <Typography variant="h6" color="primary">
          🌀
        </Typography>
      </Box>

      <Box
        sx={{
          width: '100%',
          maxWidth: 360,
          padding: 3,
          backgroundColor: '#FFFFFF',
          borderRadius: 2,
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
          textAlign: 'center',
        }}
      >
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          Welcome Back
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          marginBottom={3}
        >
          Enter your credentials to access your account.
        </Typography>

        <form>
          <TextField
            style={{ marginBottom: 16 }}
            label="Enter your email"
            variant="outlined"
            fullWidth
            value={email}
            onChange={handleEmailChange}
          />
          <TextField
            style={{ marginBottom: 16 }}
            label="Enter your password"
            variant="outlined"
            type="password"
            fullWidth
            value={password}
            onChange={handlePasswordChange}
          />
          <Button
            variant="contained"
            color="primary"
            fullWidth
            style={{
              marginTop: 8,
              backgroundColor: '#3B82F6',
            }}
            onClick={handleLogin}
          >
            Sign In
          </Button>
        </form>
      </Box>

      <Typography
        variant="body2"
        color="text.secondary"
        style={{ marginTop: 16 }}
      >
        Forgot your password?{' '}
        <Link to="/reset-password" style={{ color: '#3B82F6' }}>
          Reset Password
        </Link>
      </Typography>
    </Container>
  );
};

export default LoginPage;
