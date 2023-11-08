import styled from "styled-components";

export const MenuButtonWrapper = styled.button`
  border: none;
  background-color: rgba(0,0,0,0);
  @media only screen and (min-width: 624px) {
    display: none;
  }
`;

export const ButtonClose = styled.div`
  svg{
    padding-right: 10px;
    width: 50px;
    height: 50px;
  }
`;
