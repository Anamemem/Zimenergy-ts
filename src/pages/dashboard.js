import React from 'react';
import ResponsiveDrawer from '../../src/component/drawer';
import { Avatar, Box, Grid, Stack, Typography } from '@mui/material';
import { Margin } from '@mui/icons-material';

const Dashboard = () => {

   
        const yellowBackgroundStyle = {
          background: '#FFD700',
          minHeight: '50vh', // Set the height to fill the screen vertically
          display: 'flex',
          justifyContent: 'center',     
          alignItems: 'center',
          width: "100%",
          marginTop: "85px",
        };
               
  return (
    <div>
      <ResponsiveDrawer />
      <Box sx={{
        backgroundColor: "white",
      }}
      px={2}
      mt={2}
      width="100%">
     
     <Avatar alt="User Avatar" src="/path/to/avatar.jpg"  sx={{ width: 90, height: 90, mb: 1 }} />
        <Typography variant="h5" gutterBottom>
          ID:2182806247
        </Typography>
        <Typography variant="h5">Account </Typography>
      </Box>
      <div style={yellowBackgroundStyle}>
      <Stack spacing={7} direction="row" justifyContent="center">
        <Stack alignItems="flex-end">
          <Typography variant="h5">0.00NGN
          <p style={{fontSize: "12px"}}>Balance</p></Typography>
       
          <Typography variant="h5">0.00NGN
          <p style={{fontSize: "12px"}}>Todays Income</p></Typography>

          <Typography variant="h5">0.00NGN
          <p style={{fontSize: "12px"}}>Team Income</p></Typography>
        </Stack>
        <Stack alignItems="flex-start">
        <Typography variant="h5">0.00NGN
          <p style={{fontSize: "12px"}}>Withdraw</p></Typography>


          <Typography variant="h5">0.00NGN
          <p style={{fontSize: "12px"}}>Assets</p></Typography>

          <Typography variant="h5">0.00NGN
          <p style={{fontSize: "12px"}}>Total Income</p></Typography>
        </Stack>
      </Stack>
    </div>

    </div>
  );
};

export default Dashboard;
