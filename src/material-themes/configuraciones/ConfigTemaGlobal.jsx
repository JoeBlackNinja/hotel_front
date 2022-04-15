import { createTheme } from '@material-ui/core/styles'

const theme = createTheme({
    palette: {
        primary: {
            light: '#ffa270',
            main: '#ff7043',
            dark: '#c63f17',
            contrastText: '#fff',
          },
          secondary: {
            light: '#88ffff',
            main: '#4dd0e1',
            dark: '#009faf',
            contrastText: '#260e04',
          }
    },
    typography: {
        
    }
});

export default theme;


