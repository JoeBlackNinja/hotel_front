import { Button } from "@mui/material"

export default function Boton() {
  return (
      <>
        <Button color="primary" variant="text">Text</Button>
        
        <Button color="secondary" variant="contained">Contained</Button>
        
        <Button color="warning" variant="outlined">Outlined</Button>
      
        <Button color="warning" variant="contained">WARNING WITH </Button>

        <Button color="warning" variant="contained" href="https://www.google.com.mx/">Ir a google</Button>

        <Button color="primary" variant="contained" fullWidth>fullWidth propiedad</Button>

        <Button color="secondary" variant="contained" size="small">Size small</Button>
        <Button color="primary" variant="contained" size="medium">Size medium</Button>
        <Button color="secondary" variant="contained" size="large">Size large</Button>
      </>    
  )
}
