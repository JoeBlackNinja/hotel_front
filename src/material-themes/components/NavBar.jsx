import {AppBar, Toolbar, Typography, IconButton} from '@mui/material'; 
import { Button, makeStyles } from "@material-ui/core";

import MenuIcon from '@mui/icons-material/Menu';

const useStyles = makeStyles(theme => ({
    offset: theme.mixins.toolbar,
    menuButton:{      
        marginRight: theme.spacing(2) 
    },
    title:{
      flexGrow : 1
    }     
}));

export default function NavBar() {
  const navbarstyle = useStyles();
  return (
    <div>
        <AppBar color="primary">
          <Toolbar>
            <IconButton 
              color='inherit'
              aria-label='menu' 
              className={navbarstyle.menuButton}
              >
              <MenuIcon/>
            </IconButton>
            <Typography variant="h6" className={navbarstyle.title}>
              BACKPACKERS Hostel
            </Typography>
            <Button variant='text' color='inherit'>
              Login
            </Button>
          </Toolbar>          
        </AppBar>
        <div className={navbarstyle.offset}>
        </div>
    </div>
  )
}
