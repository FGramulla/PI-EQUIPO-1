import { useEffect } from "react";
import Categories from "../../modules/Categories";
import Recommended from "../../modules/Recommended";
import Search from "../../modules/Search";
import { HomeWrapper, Publicidades } from "./homeUser.style";
import { getFromLocalStorage } from "../../mocks/initLocalStorage";
import Dashboard from "../Dashboard/index";

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
      <Dashboard />
      <Recommended />
      <Publicidades />
    </HomeWrapper>
    </>
  );
};

export default Home;
