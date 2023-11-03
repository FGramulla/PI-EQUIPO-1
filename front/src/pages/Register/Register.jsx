import { useEffect } from "react";
import {
  Label,
  LoginWrapper,
  Inputs,
  SoyAdmin,
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
<<<<<<< HEAD
          
          <SoyAdmin>
            <div>
              <InputCheckBox type="checkbox" />
              <span>Soy administrador </span>
            </div>
          </SoyAdmin>
        
=======

>>>>>>> b48d647a3a64b10c628ce2d600e0ce298085071f
          <Button>Registrarme</Button>
        </LoginWrapper>
      </form>
    </>
  );
};

export default Register;
