import React from 'react';
// import Box from '@mui/material/Box';
import { Box, Typography, Divider, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import TextWithYellowItem from "../component/tab"

const BackgroundWithBoxAndText: React.FC = () => {
  const containerStyle: React.CSSProperties = {
    position: 'relative',
    width: '100%',
    height: '100vh',
    background: 'url(/backgroundzin.png) center/cover no-repeat',
  };


  
  const boxStyle: React.CSSProperties = {
    position: 'absolute',
    top: '15%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
   

    backgroundColor: '#282828',
    borderRadius: '8px',
    color: "#FFFFFF",

    alignItems: 'center',
    justifyContent: 'center',
  };
  const StyledHr = styled(Divider)({
    margin: '10px 0',
  });
  const textStyle: React.CSSProperties = {
    position: 'absolute',
    bottom: '16px',
    left: '16px',
    color: '#fff',
    fontSize: '16px',
  };

  
    

  return (
    <div style={containerStyle}>
      <Box sx={boxStyle} width={{xs: "90%", md: "400px"}} height={{xs: "100px", md: "110px"}}>
        <Stack direction="row" spacing={1}>
<img src="/zim.png" alt='zim' />
      <Typography  fontFamily='Archivo' pt={1}
       fontSize="16px">Zim  energy</Typography>
        </Stack>
      <StyledHr />
      <Stack direction="row" spacing={2}>
        <TextWithYellowItem />

      

      </Stack>
      </Box>
      <Box sx={textStyle}>
      <Typography
       
       style={{
         
         color: '#ffffff',
       }}
       fontFamily='Archivo'
       fontSize="18px"
       mt={-15}
     >
      No Gibberish - Let’s get you <br />
moving on the Right motion track
     </Typography>
      </Box>
    </div>
  );
};

export default BackgroundWithBoxAndText;
