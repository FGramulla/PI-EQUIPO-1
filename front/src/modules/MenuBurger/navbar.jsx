import React, { useState } from "react";
import { NavBarWrapper } from "./navBar.style";
import { Link } from "react-router-dom";


function NavBar({ open }) {
  const [logged, setLogged] = useState (false);
  return (
    <NavBarWrapper open={open}>
      <a href="#"><Link to={"/login"}>Iniciar sesión</Link></a>
      <a href="#"><Link to={"/register"}>Crear Cuenta</Link></a>
    </NavBarWrapper>
  );
}

export default NavBar;

