import { Button } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core";
import ConfigTemaGlobal from '../configuraciones/ConfigTemaGlobal';

import { Typography } from "@mui/material";

import NavBar from './NavBar';

export default function TemaGlobal() {
  return ( 
    <div>
        <ThemeProvider theme={ConfigTemaGlobal}>
            <NavBar/>
            <Button
                variant="contained"
                color="primary"
            >
                Cantilever
            </Button>
            <Button
                variant="contained"
                color="secondary"
            >
                Trifoco
            </Button>
            <Typography
                color="primary"
            >
                Cantilever
            </Typography>
            <Typography
                color="secondary"
                variant="h1"
            >
                Lorem ipsum dolor sit amet 
                    consectetur adipisicing elit. 
                    Distinctio cum numquam perspiciatis 
                    quasi maiores inventore magni facilis 
                    corrupti mollitia eos! Eos architecto 
                    aperiam laborum dignissimos deleniti. 
                    Sit magni nesciunt voluptatibus.
                
            </Typography>

        </ThemeProvider>
    </div>
  )
}
