import {  
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Divider
} from '@material-ui/core'

import { ListItemButton } from '@mui/material'

import { 
    CloudQueueRounded,
    Mail,
    Home,
    BookOnline
} from '@mui/icons-material'

export default function Lista() {
  return (
    <div>
        <List component='nav'>

            <ListItem button>
                <ListItemIcon>
                    <Home/>
                </ListItemIcon>
                <ListItemText primary="Home"/>
            </ListItem>
            
            <ListItem button>
                <ListItemIcon>
                    <Mail/>
                </ListItemIcon>
                <ListItemText primary="Mail"/>
            </ListItem>    
            
            <ListItem button>
                <ListItemIcon>
                    <BookOnline/>
                </ListItemIcon>
                <ListItemText primary="Book"/>
            </ListItem>

            <Divider/>

        </List>
    </div>
  )
}
