import React from "react";
import { NavBarWrapper } from "./navBar.style";
import { Link } from "react-router-dom";


function NavBarUser(props) {
  const {open} = props
  return (
    <NavBarWrapper open={open}>
      <a href="#"><Link to={"/"}>Link 1</Link></a>
      <a href="#"><Link to={"/"}>Link 2</Link></a>
    </NavBarWrapper>
  );
}

export default NavBarUser;