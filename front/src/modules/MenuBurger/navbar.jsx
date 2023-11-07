import React from "react";
import { NavbarWrapper } from "../MenuBurger/navbar.style";

function Navbar({ open }) {
  return (
    <NavbarWrapper open={open}>
      <a href="#">Iniciar sesión</a>
      <a href="#">Categorías</a>
      <a href="#">Recomendados</a>
      <a href="#">Link</a>
    </NavbarWrapper>
  );
}

export default Navbar;

