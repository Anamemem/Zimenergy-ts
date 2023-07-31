import React from 'react';
// import Box from '@mui/material/Box';
import { Box, Typography, Divider, Stack, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import TextWithYellowItem from "../component/tab"

const About: React.FC = () => {
  const containerStyle: React.CSSProperties = {
    position: 'relative',
    width: '100%',
    height: '100vh',
    background: 'url(/about.png) center/cover no-repeat',
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
    <>
   
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
     
     </Typography>
      </Box>
    </div>

<Grid container style={{backgroundColor: "#EDEDED"}}  height="170vh"
 >
  <Grid item xs={12} px={{md: "20px", xs: "7px"}} mt={3}>
  <Typography  fontFamily='Archivo' fontSize="20px" fontWeight="700" mt={5}>Industry & Applications
</Typography>
<Typography  mt={3} fontFamily='Archivo' color="#000000" fontSize="14px" fontWeight="400">
In addition to a wide variety of standard industrial Zim Energy products,
 our custom engineered specialty flanged inline solutions are used for research, testing, and other 
 high energetic-temperature applications throughout the heating space, aviation, defense, and automotive industries.</Typography>
<Typography mt={5} lineHeight="40px">
    ENERGY CHARACTERS<br />


DEHUMIDIFICATION
EMISSIONS & POLLUTION CONTROL<br />

HEART SCRUBBERS<br />

THERMAL ENERGY STORAGE<br />

ALTERNATIVE ENERGY STORAGE PROCESSES<br />

SOLAR CHARGE STORAGE PREHEATS<br />

PHASE- CHANGE MATERIAL HEATERS<br />

SOLID INCOME CUSTOM HEATERS</Typography>
      </Grid>
      <Grid xs={12} md={6}>
      <Typography  fontFamily='Archivo' px={1} fontSize="20px" fontWeight="700" mt={3}>
      WE PROVIDE 
GUARANTEES
</Typography>
      </Grid>
      <Grid xs={12} md={6}>
     <img src="cert.png" alt="certificate" style={{ width: '100%', height: 'auto' }} />
      </Grid>

</Grid>
</>
  );
};

export default About;
