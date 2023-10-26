import { Label, LoginWrapper, Inputs, Remember,ImagenPerfil, Button, Button1, InputCheckBox } from "./Login.style"


const Login = () => {
  return (
    <>
    <LoginWrapper>
      
      <ImagenPerfil>
        <img src="/src/assets/Male User.png" alt="user" />
      </ImagenPerfil>
      
      <Label>Email</Label>
      <Inputs type="email" required/>
      
      <Label>Password</Label>
      <Inputs type="password" required/>
      
      <Remember>
        <div>
          <InputCheckBox type="checkbox"/>
          <span>Remember me </span>
        </div>
        <Button1>Forgot Password? </Button1>
      </Remember>
      
      <Button>Login</Button>
    
    </LoginWrapper>
    </>
  )
}

export default Login