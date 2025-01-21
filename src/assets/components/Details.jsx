import { Box, Card, CardContent, Grid2, Typography } from '@mui/material';
import axios from 'axios';

import React, { useEffect, useState } from 'react';

export const Details = () => {

  const [data, setData] = useState([]);

  // Fetch data using axios
  useEffect(() => {
    axios.get('https://dummyjson.com/users').then((res) => {
      setData(res.data.users);
    });
  }, []);

  return (
    <>
     <h1 style={{ textAlign: 'center' }}>User Details</h1>
<Box sx={{ flexGrow: 1, p: 3 }}>
  <Grid2 container spacing={3}>
    {data.map((user) => {
      
      const cardBackgroundColor = user.gender === 'male' ? '#e8000d' : '#8fce00'; 
      
      return (
        <Grid2 item xs={12} sm={6} md={4} key={user.id} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Card 
            style={{ backgroundColor: cardBackgroundColor }} 
            sx={{ width: '100%', height: 350, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
          >
            <CardContent sx={{ overflow: 'auto' }}>
              <Typography variant="h5" component="div" sx={{ fontWeight: 'bold', marginBottom: 1 }}>
                {user.firstName} {user.lastName}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <strong>Email:</strong> {user.email}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <strong>Gender:</strong> {user.gender}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <strong>Phone:</strong> {user.phone}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <strong>Address:</strong> {user.address.address}, {user.address.city}
              </Typography>
            </CardContent>
          </Card>
        </Grid2>
      );
    })}
  </Grid2>
</Box>

    </>
  );
}

export default Details