
import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import DataTable from './DataTable';
import DepartmentList from './DepartmentList';

const SecondPage: React.FC = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const userDetails = localStorage.getItem('userDetails');
    if (!userDetails) {
      window.location.href = '/';
    }

     fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <Box>
      <Typography variant="h4" component="h2" gutterBottom color = "primary.main">
        Data Table
      </Typography>
      <DataTable data={data} />
      <Typography variant="h4" component="h2" marginTop={3}  color = "primary.main" gutterBottom>
        Department List
      </Typography>
      <DepartmentList />
    </Box>
  );
};

export default SecondPage;
