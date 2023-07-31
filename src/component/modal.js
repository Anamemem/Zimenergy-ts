import React from 'react';
import { Modal, Box, Typography, Button, TextField } from '@mui/material';

const CustomModal = ({ open, onClose }) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <Box sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 300,
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
      }}>
           <Typography fontFamily="Archivo" fontSize="18px" fontWeight="700">Recipients Account details</Typography>
        <Typography id="modal-description" sx={{ mt: 2 }}>
         
        </Typography>

        <Typography fontFamily="Archivo" fontSize="14px" fontWeight="700">Recipients Country</Typography>
        <TextField id="standard-basic" label="Nigeria" variant="standard" />

        <Typography fontFamily="Archivo" mt={2} fontSize="14px" fontWeight="700">Bank Account number</Typography>
        <TextField id="standard-basic" label="2182806247" variant="standard" />

        <Typography fontFamily="Archivo" mt={2} fontSize="14px" fontWeight="700">Account Name </Typography>
        <TextField id="standard-basic" label="Kinglsey" variant="standard" />

        <Typography fontFamily="Archivo"   mt={2} fontSize="14px" fontWeight="700">Recipients Bank Name</Typography>
        <TextField id="standard-basic"  label="UBA" variant="standard" />

       
        <Button  style={{backgroundColor: "#FFD700", color: "black", margin: "auto",  display: "flex",
  alignItems: "center", marginTop: "20px",
  justifyContent: "center"}}>
    Add Bank Account
        </Button>
       
        <Button   style={{  display: "flex",
  alignItems: "center", margin: "auto", marginTop: "20px",
  justifyContent: "center"}}  variant="contained" onClick={onClose} >
          Close
        </Button>
      </Box>
    </Modal>
  );
};

export default CustomModal;
