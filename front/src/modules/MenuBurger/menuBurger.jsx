import React from "react";
import burguerLogo from "../../assets/logoBurguer.png";
import { MenuButtonWrapper } from "./menuBurger.style"


function MenuButton({ open, handleClick }) {
  return !open ? (
    <MenuButtonWrapper onClick={handleClick}>
      <img src={burguerLogo} alt="logoBurguer" width="30" height="30"/>     
    </MenuButtonWrapper>
  ) : (
    <MenuButtonWrapper onClick={handleClick}>
      <img src={burguerLogo} alt="logoBurguer" width="30" height="30"/>    
    </MenuButtonWrapper>
  );
}

export default MenuButton;


