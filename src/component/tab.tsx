import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Link from 'next/link';

const TextWithYellowItem: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const textData = [
    { text: 'Home', url: '/' },
    { text: 'About', url: '/about' },
    { text: 'Epic', url: '/' },
    { text: 'Team', url: '/' },
    { text: 'Profile', url: '/dashboard' },
  ];

  const textStyle: React.CSSProperties = {

    cursor: 'pointer',
    marginBottom: '16px',
  };

  const yellowItemStyle: React.CSSProperties = {
    backgroundColor: 'yellow',
    width: '100%',
    height: '4px',
    borderRadius: '2px',
    color: "white",
  };

  return (
    <Stack direction="row" spacing={1.3}>
      {textData.map((item, index) => (
        <Box
          key={index}
          sx={textStyle}
          onClick={() => handleClick(index)}
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <Link  
          href={item.url}  passHref>
           
              <Stack direction="row" px={0.5} spacing={0.2}>
              <Typography color="lightgray" sx={{ textDecoration: 'none' }} fontFamily="Archivo" fontSize="14px">
  {item.text}
</Typography>

              </Stack>
            
          </Link>
          {activeIndex === index && <Box sx={yellowItemStyle} />}
        </Box>
      ))}
    </Stack>
  );
};

export default TextWithYellowItem;
