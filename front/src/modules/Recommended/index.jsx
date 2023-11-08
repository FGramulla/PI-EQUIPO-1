import ProductCard from "../ProductCard"
import { RecommendedWrapper, TitleSeccion } from "./recommended.style"
import { getRandomElements } from "../../utils/get-random-elements"
import { getAllProducts } from "../../services/product"
import { useEffect, useState } from "react"


const Recommended = () => {

  const [productsToShow, setProductsToShow] = useState(null);

  useEffect(()=>{
    window.scrollTo(0, 0);

    async function fetchData () {
      await getAllProducts()
        .then((result) =>{
          setProductsToShow(getRandomElements(result, 10));
        }) 
    }
    fetchData();
  },[]);
  
  return (
    <>
      <TitleSeccion>Productos recomendados</TitleSeccion>    
      <RecommendedWrapper>
          {productsToShow && productsToShow.map((product, index)=>(
            <ProductCard key={index} product={product}/>
          ))}
      </RecommendedWrapper>
    </>
  )
}

export default Recommended