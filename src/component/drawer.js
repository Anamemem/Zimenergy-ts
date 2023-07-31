import React from 'react';
import { Drawer,Stack,Typography, AppBar, Toolbar, List, ListItem, ListItemText, ListItemIcon, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home'; // Import the icons you want to use
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PeopleIcon from '@mui/icons-material/People';
import BusinessIcon from '@mui/icons-material/Business';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import Link from 'next/link'; // Import the Link component from Next.js

const ResponsiveDrawer = () => {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const drawerItems = [
    { label: 'Home', link: '/', icon: <HomeIcon /> },
    { label: 'Profile', link: '/dashboard', icon: <AccountCircleIcon /> },
    { label: 'Recipients', link: '/recipients', icon: <PeopleIcon /> },
    { label: 'Custom services', link: '/dashboard', icon: <BusinessIcon /> }, // Fixed the typo in 'Custom'
    { label: 'Logout', link: '/', icon: <ExitToAppIcon /> },
  ];

  return (
    <div>
      <AppBar position="static" sx={{ backgroundColor: "#FFD700" }}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={open} onClose={toggleDrawer}>
      <Stack direction="row" spacing={1}  px={2} mt={3}>
<img src="/zim.png" style={{borderRadius: "50px"}} alt='zim' />
      <Typography  fontFamily='Archivo' pt={1} fontWeight="700"
       fontSize="16px">Zim  energy</Typography>
        </Stack>
        <List>
          {drawerItems.map((item) => (
            <Link href={item.link} key={item.label} passHref>
              <ListItem button component="a">
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText  sx={{textDecoration: "none"}} primary={item.label} />
              </ListItem>
            </Link>
          ))}
        </List>
      </Drawer>
    </div>
  );
};

export default ResponsiveDrawer;
