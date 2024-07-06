// src/components/UserForm.tsx
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Box, TextField, Button, Typography, Alert } from '@mui/material';

const UserForm: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const { state } = location;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && phone && email) {
      localStorage.setItem('userDetails', JSON.stringify({ name, phone, email }));
      navigate('/second-page');
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: '300px', margin: 'auto' }}>
      {state?.message && <Alert severity="warning">{state.message}</Alert>}
      <Typography variant="h4" component="h1" gutterBottom>
        User Form
      </Typography>
      <TextField label="Name" value={name} onChange={(e) => setName(e.target.value)} required />
      <TextField label="Phone Number" type='number' value={phone} onChange={(e) => setPhone(e.target.value)} required />
      <TextField label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </Box>
  );
};

export default UserForm;
