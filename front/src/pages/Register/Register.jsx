import { useEffect } from "react";
import {
  Label,
  LoginWrapper,
  Inputs,
  Remember,
  ImagenPerfil,
  Button,
  InputCheckBox,
} from "./register.style";
const Register = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <form action="">
        <LoginWrapper>

          <Label>Nombre</Label>
          <Inputs type="text" required placeholder="Ingresa tú nombre" />

          <Label>Email</Label>
          <Inputs type="email" required placeholder="Ingresa tú e-mail" />

          <Label>Password</Label>
          <Inputs type="password" required placeholder="Crea una contraseña" autoComplete="on" />

          <Label>Confirmar password</Label>
          <Inputs type="password" required placeholder="Repite la contraseña" autoComplete="on"/>

          <Button>Registrarme</Button>
        </LoginWrapper>
      </form>
    </>
  );
};

export default Register;
