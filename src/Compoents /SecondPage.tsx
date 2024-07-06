// src/components/SecondPage.tsx
import React, { useEffect, useState } from 'react';
import { Box, Typography, } from '@mui/material';
import DataTable from './DataTable';
import DepartmentList from './DepartmentList';
import { useNavigate } from 'react-router-dom';

const SecondPage: React.FC = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const userDetails = localStorage.getItem('userDetails');
    if (!userDetails) {
      navigate('/', { state: { message: 'Please enter your details before accessing this page.' } });
      return;
    }

    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, [navigate]);

  return (
    <Box>
      <Typography variant="h4" component="h2" gutterBottom color="primary.main">
        Data Table
      </Typography>
      <DataTable data={data} />
      <Typography variant="h4" component="h2" marginTop={3} color="primary.main" gutterBottom>
        Department List
      </Typography>
      <DepartmentList />
    </Box>
  );
};

export default SecondPage;
