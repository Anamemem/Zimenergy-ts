import React from 'react';

import { Card, CardContent, CardMedia, Typography, Stack } from '@mui/material';

const styles = {
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '100%',
    height: '100%',
    borderRadius: "20px",
    cursor: "pointer",
  },
  imgContainer: {
    flex: '1 0 auto',
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    backgroundColor: "lightgray",
  },
  img: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
};


const cardData = [
    {
      title: ' ZE- 56kW  ',
      description: 'As a principal supplier of standalone power generation equipment in the U.S. market, HiGPower Systems ',
    
      src: '/productii.png',
      price: ' ₦15,000',
      income: 'Day income:900',
    },
    {
      title: ' ZE- 56kW  ',
      description: 'As a principal supplier of standalone power generation equipment in the U.S. market, HiGPower Systems ',
    
      src: '/producti.png',
      price: '  ₦15,000',
      income: 'Day income:900',
    },
    {
      title: ' ZE- 56kW  ',
      description: 'As a principal supplier of standalone power generation equipment in the U.S. market, HiGPower Systems ',
    
      src: '/productii.png',
      price: '  ₦15,000',
      income: 'Day income:900',
    },
    {
      title: ' ZE- 56kW  ',
      description: 'As a principal supplier of standalone power generation equipment in the U.S. market, HiGPower Systems ',
    
      src: '/producti.png',
      price: '  ₦15,000',
      income: 'Day income:900',
    },
  ];

  


  
  const CardCollection = () => {
   
  
    return (
      <div>
         <Stack spacing={6} direction={{xs: "column", md: "row"}}>

        {cardData.map((card, index) => (
          <Card key={index} style={styles.card}>
          <div style={styles.imgContainer}>
            <img src={card.src} alt={card.title} style={styles.img} />
          </div>
          <CardContent>
            <Typography fontSize="17px" fontWeight="700" color="#000000" fontFamily='Archivo'> 
              {card.title}
            </Typography>
            <Typography fontSize="12px" fontWeight="520" color="#000000" fontFamily='Archivo'>
              {card.description}<span style={{cursor: "pointer", color: "#FFDF31"}}>Read more.......</span>
            </Typography>
            <Typography fontSize="30px" fontWeight="700" color="#000000" fontFamily='Archivo'>
              {card.price}
            </Typography>
            <Typography fontSize="17px" fontWeight="700" color="#000000" fontFamily='Archivo'>
              {card.income}
            </Typography>
          </CardContent>
        </Card>
        ))}
         </Stack>
      </div>
    );
  };
  
  export default CardCollection