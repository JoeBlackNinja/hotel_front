import { makeStyles } from "@material-ui/core";

import NavBar from './NavBar'
import Cajon from './Cajon'

const estilos = makeStyles(theme => ({
    toolbar: theme.mixins.toolbar,
    root:{
        display: 'flex'
    },
    content:{
        flexGrow : 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(4)
    }    
}));

const Contenedor = () => {

    const clasesEstilos = estilos();

  return (
    <div className={clasesEstilos.root}>
        <NavBar/>
        <Cajon/>
        <div className={clasesEstilos.content}>
            <div className={clasesEstilos.toolbar}></div>
            Cantilever            
        </div>        
    </div>
  )
}

export default Contenedor;