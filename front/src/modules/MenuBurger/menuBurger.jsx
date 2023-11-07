import React from "react";
import burguerLogo from "../../assets/logoBurguer.png";
// import { MenuButtonWrapper } from "../MenuBurger/menuBurger.style"
import styled from "styled-components";

const MenuButtonWrapper = styled.button`
  border: none;
  background-color: rgba(0,0,0,0);

  @media only screen and (min-width: 624px) {
    display: none;
  }
`;

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


