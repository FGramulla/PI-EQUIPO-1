import { useEffect } from "react";
import Categories from "../../modules/Categories";
import Recommended from "../../modules/Recommended";
import Search from "../../modules/Search";
import { HomeWrapper } from "./home.style";
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
      <Search />
      <Categories />
      <Recommended />
    </HomeWrapper>
    </>
  );
};

export default Home;
