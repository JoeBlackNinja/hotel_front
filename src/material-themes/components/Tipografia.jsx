import Typography from '@mui/material/Typography'

import ConfigTemaGlobal from '../configuraciones/ConfigTemaGlobal'

import { ThemeProvider } from '@material-ui/core';

export default function Tipografia() {
  return (
    <div>
      <ThemeProvider theme={ConfigTemaGlobal}>

        <Typography 
          variant="h1" 
          color="primary">
          variant="h1" color=""
        </Typography>
        <br />
        <Typography variant="h4" color="secondary">
          variant="h4" color="secondary"
        </Typography>
        <br />
        <Typography variant="h2" color="textPrimary" align="center">
          variant="h2" color="CaptionText" align='center'
        </Typography>

        <Typography
          variant="body1"
          color="primary"
          align="center"
          paragraph
          gutterBottom
        >
          variant="h2" color="CaptionText" align='center'
        </Typography>

      </ThemeProvider>

    </div>
  );
}
