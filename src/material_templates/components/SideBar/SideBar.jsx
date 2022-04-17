import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import HomeIcon from '@mui/icons-material/Home';
import Info from '@mui/icons-material/Info';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import BookOnlineIcon from '@mui/icons-material/BookOnline';
import StackedLineChartIcon from '@mui/icons-material/StackedLineChart';
import LoginIcon from '@mui/icons-material/Login';

import { Link } from 'react-router-dom'

const drawerWidth = 240;

function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />    
      <Divider/>
      <List>        
        <Link to="/">
          <ListItem button key='Home'>
            <ListItemIcon><HomeIcon/></ListItemIcon>
            <ListItemText>Home</ListItemText>
          </ListItem>
        </Link>     
        <Link to="/about">
          <ListItem button key='About'>          
            <ListItemIcon><Info/></ListItemIcon>
            <ListItemText>About Us</ListItemText>                        
          </ListItem>
        </Link>
        <Link to="/register">
           <ListItem button key='Register'>
            <ListItemIcon><HowToRegIcon/></ListItemIcon>
            <ListItemText>Register</ListItemText>  
          </ListItem>
        </Link>
        <Link to="/reservation">
          <ListItem button key='Reservation'>
              <ListItemIcon><BookOnlineIcon/></ListItemIcon>
              <ListItemText>Reservation</ListItemText>  
          </ListItem>
        </Link>
        <Link to="/statistics">
          <ListItem button key='Statistics'>
            <ListItemIcon><StackedLineChartIcon/></ListItemIcon>
            <ListItemText>Statistics</ListItemText>  
          </ListItem>
        </Link>
        <Link to="/login">
          <ListItem button key='Login'>
            <ListItemIcon><LoginIcon/></ListItemIcon>
            <ListItemText>Log in</ListItemText>  
          </ListItem>
        </Link>        
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex'}}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            BackPackers HOSTEL
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >

       {props.objectDeploy}

      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;