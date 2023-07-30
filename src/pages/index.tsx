import Image from 'next/image'
import React from 'react';
import { Box, Typography, Stack, Grid, Card, CardContent, Button } from '@mui/material';
import CardCollection from "../../src/component/productCard"

export default function Home() {
  return (
    <><Box width="100%" height="auto" position="relative">
      <img
        src="backgroundzin.png"
        alt="Your Image"
        style={{
          width: '100%',
          height: '100vh',
          objectFit: 'cover',
        }} />
    <Typography
       
        style={{
          position: 'absolute',
          bottom: '16px',
          left: '20px',
          color: '#ffffff',
        }}
        fontFamily='Archivo'
        fontSize="18px"
      >
       No Gibberish - Let’s get you <br />
moving on the Right motion track
      </Typography>
    </Box>
    
    <Box
    height={{xs:"70vh", md: "40vh", sm: "40vh"}}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
     
      }}
    >
      <Stack spacing={7} direction={{xs: "column", md: "row", sm: "row"}}>
        <Box
          sx={{
            textAlign: "center",
          }}
        >
         

         <Typography fontFamily='Archivo' fontWeight="bold" color='#000000' fontSize="20px">8+</Typography> <Typography fontSize="12px" fontFamily='Archivo'  fontWeight="700">No Gibberish - Let’s <br />
get you moving on
          </Typography>
        </Box>
        <Box
          sx={{
            textAlign: "center",
           
          }}
        >
          <Typography fontFamily='Archivo' fontWeight="bold" color='#000000' fontSize="20px">24+</Typography>
           <Typography fontSize="12px" fontFamily='Archivo'  fontWeight="700">No Gibberish - Let’s <br />
get you moving on
          </Typography>
        </Box>
        <Box
          sx={{
            textAlign: "center",
        
          }}
        >
           <Typography fontFamily='Archivo' fontWeight="bold" color='#000000' fontSize="20px">5+</Typography> 
           <Typography fontSize="12px" fontFamily='Archivo'  fontWeight="700">No Gibberish - Let’s <br />
get you moving on
          </Typography>
        </Box>
      </Stack>
    </Box>

    <Grid container  alignItems="center" justifyContent="center" >
      {/* First image */}
      <Grid item xs={12} md={3}>
        <img src="/image 22.png" alt="Image 1" style={{ width: '100%', height: 'auto' }} />
      </Grid>

      {/* Card */}
      <Grid item xs={12} md={6}>
        <Card sx={{backgroundColor: "#FFD700", height: "450px", marginBottom: "10px"}} >
        <Typography textAlign="center" fontFamily='Archivo' fontSize="30px" fontWeight="700" mt={5}>Industry & Applications
</Typography>
           <Typography textAlign="center" mt={8} fontFamily='Archivo'>
In addition to a wide variety of standard industrial Zim Energy products,
 our custom engineered specialty flanged inline solutions are used for research, testing, and other 
 high energetic-temperature applications throughout the heating space, aviation, defense, and automotive industries.</Typography>
         
 <Box
      sx={{ 
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      
      }}
     
      mt={4}>
     
      <Button 
      sx={{border: "1px solid #FFD700", backgroundColor: "#EDEDED", color: "#000000", width: "300px", height: "50px"}}>Learn More</Button>
      </Box>
        </Card>
     
      </Grid>

      {/* Second image */}
      <Grid item xs={12} md={3}>
        <img src="image 23.png" alt="Image 2" style={{ width: '100%', height: 'auto' }} />
      </Grid>
    </Grid>
    <Box
      sx={{
       
       paddingTop: "40px",
        alignItems: "center",
        backgroundColor: "#EDEDED",
        height: "100vh", // Set the height to full viewport height
      }}
      px={{md: "50px", xs: "10px"}}
    >
      <Box
          sx={{
            textAlign: "center",
        
          }}
        >
          <Typography  fontWeight="400" fontSize={{xs: "1.5rem", md: "4rem"}}  fontFamily='Climate Crisis, cursive'>
            Product and services
          </Typography>
        </Box>
        <Box
      sx={{ 
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      
      }}
     
      mt={10}
    >
    
      <CardCollection />
  
    </Box>

    <Box  pt={10}  px={{md: "50px", xs: "3px"}} 
    >

<Typography fontFamily='Archivo' fontWeight="700" fontSize="20px"> Latest transactions</Typography>

    <Box
  sx={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  backgroundColor: "white",
  height: "50vh",
 
  }}
 mt={8}
 
>

 <Typography fontFamily='Archivo' textAlign="center"
 fontWeight="400" fontSize="20px" color="#A5A5A5" >No transactions yet</Typography>

</Box>
</Box>
  
    </Box>

    
 
    </>
     )
}
