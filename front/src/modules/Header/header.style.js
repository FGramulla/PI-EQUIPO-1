import styled from "styled-components";

export const HeaderWrapper = styled.div`
  width: 100%;
  background-color: var(--color-lightGreen);
  min-height: 100px;
  height: 130px;
  box-shadow: 0px 4px 4px 0px rgba(100, 100, 100, 0.5);
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;

  a {
    color: var(--colors-blue);
    text-decoration: none;
  }
`;

export const LogoWrapper = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1000px) {
    padding: 0;
  }
`;

export const Logo = styled.img`
  width: 80px;
  height: auto;
  margin-left: 2rem;
`;

export const TitleWrapper = styled.div`
  margin-left: 1rem;
`;

export const LogoTitle = styled.p`
  font-size: 1rem;
  color: var(--colors-blue);
  font-weight: bold;
  line-height: 1;

  @media (max-width: 1200px) {
    font-size: 0.8rem;
  }

  @media (max-width: 1000px) {
    display: none;
  }
`;

export const LoginRegister = styled.div`
  display: flex;
  margin-left: 20px;

  @media (max-width: 600px) {
    display: none;
  }
`;

export const Login = styled.div`
  display: flex;
  gap: 16px;
  margin-right: 32px;
  cursor: pointer;

  &:hover {
    color: white;
  }
`;

export const Register = styled.div`
  display: flex;
  gap: 16px;
  margin-right: 32px;
  cursor: pointer;

  &:hover {
    color: white;
  }
`;

export const LoginRegisterMenu = styled.div`
  display: none;
  
  @media (max-width: 600px) {
    display: flex;
    height: 30px;
    width: 30px;
    gap: 16px;
    margin-right: 32px;
    cursor: pointer;
  }
  &:hover {
    img {
      filter: invert(1) sepia(0) hue-rotate(20deg) saturate(1000%);
    }
  }
`;

export const LetterContainer = styled.div`
  margin-right: 32px;
  display: flex;
  flex-direction: column;
  width: 100px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const LetterAvatar = styled.div`
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #006400;
  font-size: 32px;
  border-radius: 50%;
  color: white;
  align-self: center;
`;

export const ButtonLoggout = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: white;
  font-weight: 500;
  background-color: #999;
  font-size: 14px;
  width: 100px;
  height: 2opx;
  border-radius: 8px;
  border: none;
  margin-top: 4px;

  &:hover {
    background-color: white;
    color: black;
  }
`;

