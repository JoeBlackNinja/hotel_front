import FormularioSignIn from "./materia_barside-negro/componentes/FormularioSignIn";
import SignInSide from "./materia_barside-negro/componentes/NotAprovedSignInSide";
import FormularioCliente from "./materia_barside-negro/componentes/FormularioCliente";
import SideBar from './materia_barside-negro/componentes/SideBar/SideBar';
import RegisterUser from './material_templates/components/RegisterUser'

import { Box, List, ListItem, ListItemIcon } from "@material-ui/core";


function App() {
  return (
    <>
      <SideBar></SideBar>
      <RegisterUser/>
    </>    
  );
}

export default App;
