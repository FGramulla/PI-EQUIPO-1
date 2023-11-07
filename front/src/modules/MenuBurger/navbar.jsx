import React from "react";
import { NavBarWrapper } from "./navBar.style";
import { Link } from "react-router-dom";


function NavBar({ open }) {
  return (
    <NavBarWrapper open={open}>
      <a href="#"><Link to={"/login"}>Iniciar sesión</Link></a>
      <a href="#"><Link to={"/register"}>Crear Cuenta</Link></a>
    </NavBarWrapper>
  );
}

export default NavBar;

