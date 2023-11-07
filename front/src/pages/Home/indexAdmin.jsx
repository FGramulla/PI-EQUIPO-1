import { useEffect } from "react";
import Recommended from "../../modules/Recommended";
import { HomeWrapper, Publicidades } from "./home.style";
import { getFromLocalStorage } from "../../mocks/initLocalStorage";

const Home = () => {
  
  useEffect(()=>{
    // ******************************
    // Traer datos del localStorage si existen
    // Si no existe guarda los datos del json en mock
    // Eliminar luego al utilizar backend
    // ******************************
    getFromLocalStorage('users')
    getFromLocalStorage('categories')
    getFromLocalStorage('products')
  },[])


  return (
    <>
    <HomeWrapper>
      <Recommended />
      <Publicidades />
    </HomeWrapper>
    </>
  );
};

export default Home;
