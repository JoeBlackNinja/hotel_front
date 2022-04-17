import FormularioSignIn from "./materia_barside-negro/componentes/FormularioSignIn";
import SignInSide from "./materia_barside-negro/componentes/NotAprovedSignInSide";
import FormularioCliente from "./materia_barside-negro/componentes/FormularioCliente";
import SideBar from './materia_barside-negro/componentes/SideBar/SideBar';
import RegisterUser from './material_templates/components/Forms/RegisterUser'

import SideBarMaterial from './material_templates/components/SideBar/SideBar'
import FormRegisterUSer from './material_templates/components/Forms/RegisterUser'
import SignUp from './material_templates/components/Forms/SignUp'
import Welcome from './material_templates/components/Forms/Home'
import AboutUs from './material_templates/components/Forms/AboutUs'
import Login from './material_templates/components/Forms/LogIn'
import Reservation from './material_templates/components/Forms/Reservation'

import { Box, List, ListItem, ListItemIcon } from "@material-ui/core";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import TT from './TTTTTT'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SideBarMaterial objectDeploy={<Welcome/>}/>}/>           
          <Route path="/about" element={<SideBarMaterial objectDeploy={<AboutUs/>}/>}/>
          <Route path="/register" element={<SideBarMaterial objectDeploy={<FormRegisterUSer/>}/>}/>
          <Route path="/reservation" element={<SideBarMaterial objectDeploy={<Reservation/>}/>}/>
          <Route path="/statistics" element={<SideBarMaterial objectDeploy={<h1>Desde statistics</h1>}/>}/>
          <Route path="/login" element={<SideBarMaterial objectDeploy={<Login/>}/>}/>
          <Route path="/signup" element={<SideBarMaterial objectDeploy={<SignUp/>}/>}/>
        </Routes>
      </BrowserRouter>     
    </>    
  );
}

export default App;
