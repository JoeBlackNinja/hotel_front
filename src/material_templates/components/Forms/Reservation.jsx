import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { Select, InputLabel, MenuItem, FormControl, FormHelperText, Stack } from '@mui/material';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';


function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function SignUp() {

  const [room, setRoom] = React.useState('');  
  const [dateIngres, setDateIngres] = React.useState('');
  const [dateOut, setDateOut] = React.useState('');
  const [expirationDate, setExpirationDate] = React.useState('');

  const handleChangeRoom = (room) => {
    setRoom(room);
    console.log(room);
  }

  const handleChangeDI = (dateIngress) => {
    setDateIngres(dateIngress);
    console.log(dateIngres);
  };

  const handleChangeDO = (dateOut) => {
    setDateOut(dateOut);
  };

  const handleChangeCC = (expirationDate) => {
    setExpirationDate(expirationDate);
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Reservation
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <FormControl required sx={{ minWidth: 320 }}>
                  <InputLabel id="demo-simple-select-required-label">
                    Room
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-required-label"
                    id="demo-simple-select-required"
                    label="Room *"
                    onChange={handleChangeRoom}                                       
                  >
                    <MenuItem value={""}>None</MenuItem> 
                    <MenuItem value={"single"}>Single</MenuItem>
                    <MenuItem value={"premium"}>Premium</MenuItem>
                    <MenuItem value={"presidential"}>Presidential</MenuItem>
                  </Select>
                </FormControl>
              </Grid>


              <Grid item xs={12} sm={12}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <Stack>
                    <DesktopDatePicker
                      label="Date of admission"
                      inputFormat="MM/dd/yyyy"
                      value={dateIngres}
                      onChange={handleChangeDI}
                      renderInput={(params) => <TextField {...params} />}
                      
                    /> 
                  </Stack>
                </LocalizationProvider>
              </Grid>

              <Grid item xs={12} sm={12}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <Stack>
                    <DesktopDatePicker
                      label="Departure date"
                      inputFormat="MM/dd/yyyy"
                      value={dateOut}
                      onChange={handleChangeDO}
                      renderInput={(params) => <TextField {...params} />}
                    /> 
                  </Stack>
                </LocalizationProvider>
              </Grid>
              
              <Grid item xs={12} sm={12}>
                <TextField
                  required
                  fullWidth
                  id="cardNumbers"
                  label="Credit or debit card"
                  placeholder='XXXX XXXX XXXX XXXX'
                  name="cardNumbers"
                />
              </Grid>            

              <Grid item xs={12} sm={6}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <Stack>
                    <DesktopDatePicker
                      label="Expiration date"
                      inputFormat="MM/dd/yyyy"
                      value={expirationDate}
                      onChange={handleChangeCC}
                      renderInput={(params) => <TextField {...params} />}
                    /> 
                  </Stack>
                </LocalizationProvider>
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="cvv"
                  label="CVV"
                  name="cvv"
                />
              </Grid>                          

            </Grid>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>

            {/* <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid> */}
            
          </Box>
        </Box>

        {/* <Copyright sx={{ mt: 5 }} /> */}
      </Container>
    </ThemeProvider>
  );
}