import styled from "styled-components";

export const NavBarWrapper = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: left;
  background-color: rgba(0,0,0,0.7);
  position: fixed;
  top: 100px;
  right: ${props => (props.open ? "0" : "-100%")};
  width: 40%;
  height: auto;
  transition: right 0.3s linear;

  @media only screen and (min-width: 624px) {
    flex-direction: row;
    position: initial;
    height: auto;
    justify-content: center;
    background: white;
  }

  a {
    padding: 0.5rem 0.8rem;
    color: white;
    font-family: Roboto;
    font-size: 15px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: -0.4px;
    text-align: left;    
    }
`;


