import React, { useState } from 'react';
import { Paper, Avatar, Typography, Grid, Box } from '@mui/material';
import ResponsiveDrawer from "../component/Drawer";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Icon from '@mui/material/Icon';
import Divider from '@mui/material/Divider';
// import DashedCard from "../component/dashcard";
import CottageIcon from '@mui/icons-material/Cottage';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import CustomModal from '../component/modal'; // Import the Modal component

const Withdraw = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <ResponsiveDrawer />
      <Box px={{md: "20px", xs: "5px"}} mt={5}>
        <Typography fontFamily="Archivo" fontSize="28px" fontWeight="700">Recipients</Typography>
        <Typography fontFamily="Merriweather" fontSize="18px">Bank account for withdrawal</Typography>
        <Box onClick={handleModalOpen} style={{border: "1.8px dashed black", backgroundColor: "white",  height: "118px",  maxWidth: '400px'}}>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={2}>
              <CottageIcon sx={{color: "lightgray", fontSize: "46px"}}/>
            </Grid>
            <Grid item xs={10}  style={{ cursor: 'pointer' }}>
              <Typography fontFamily="Archivo" fontSize="18px" fontWeight="700" color="gray">Add bank account</Typography>
            </Grid>
          </Grid>
          <hr style={{ margin: '12px 0' }} />
        </Box>
      </Box>
      {/* Render the Modal */}
      <CustomModal open={modalOpen} onClose={handleModalClose} />
    </div>
  );
}

export default Withdraw;


   