import React, { useContext, useEffect, useState } from "react";
import {
  Detail,
  Header,
  Title,
  CardDetail,
  Images,
  ImagePrincipal,
  ImagesSecondaries,
  Body,
  ProductDetails,
  TextDetails,
  Categories,
  Caracteristicas,
  ButtonReserva,
  Included,
  Price,
} from "./ProdcutDetail.style";
import { useParams } from "react-router";
import flecha from "../../assets/flecha.png";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import ImageModal from "./modules/ImageModal";
import Footer from "../../modules/Footer/index";
import { productoById } from "../../services/product/productFirebase";
import { ContextGlobal } from "../../context/context";
import { getAtributoById } from "../../services/atributos/AtributosFirebase";
import Calendario from "./modules/ImageModal/Calendario";

const customStyles = {
  content: {
    top: "55%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "50%",
    maxWidth: "1000px",
    height: "80vh",
  },
};

const ProductDetail = () => {
  const { id } = useParams();

  const { categorias, logged } = useContext(ContextGlobal).contextValue;

  const [product, setProduct] = useState(null);
  const [imagePrincipal, setImagePrincipal] = useState(null);
  const [selected, setSelected] = useState(0);
  const [atributos, setAtributos] = useState({});
  const [open, setOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const getProducto = async () => {
      const product = await productoById(id);
      setProduct(product);
      setImagePrincipal(product.imagenes[0]?.urlImage);

      // Obtener atributos y guardarlos en el estado
      const atributosData = await Promise.all(
        product.detalles.map(async (detalle) => await getAtributoById(detalle))
      );
      setAtributos(atributosData);
    };

    getProducto();
    window.scrollTo(0, 0);
  }, []);

  const getCategoriaNombre = (id) => {
    const categoria = categorias.find((item) => item.id === id);
    return categoria.titulo;
  };

  const handleSecondaryImageClick = (index) => {
    if (selected !== index) {
      setImagePrincipal(imagenes[index].urlImagen);
      setSelected(index);
    }
  };

  const handleImageClick = () => {
    console.log("click en la imagen");
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleClick = () => {
    setOpen(!open);
  };

  if (!product) {
    return <p>Cargando...</p>;
  }

  const { imagenes, titulo, precio, descripcion, categoria, detalles } =
    product;

    console.log(open)

  return (
    <>
      <Detail>
        <CardDetail>
          <Header>
            <Link to={"/"}>
              <img src={flecha} alt="flecha" />
              Volver
            </Link>
            <Title>{titulo}</Title>
          </Header>
          <Body>
            <Images>
              <ImagePrincipal>
                {imagePrincipal !== undefined && (
                  <img
                    src={imagePrincipal}
                    alt={"Imagen"}
                    onClick={handleImageClick}
                  />
                )}
              </ImagePrincipal>

              <ImagesSecondaries>
                {product.imagenes.length > 0 &&
                  product.imagenes.map((image, index) => (
                    <img
                      src={image.urlImage}
                      alt={image.urlImage}
                      key={index}
                      onClick={() => handleSecondaryImageClick(index)}
                      className={selected === index ? "selected" : ""}
                    />
                  ))}
              </ImagesSecondaries>
            </Images>

            <ProductDetails>
              <TextDetails>{descripcion}</TextDetails>
              <Categories>
                Categoría: {getCategoriaNombre(categoria)}
              </Categories>
              <Price>$ {precio} x día</Price>
              {detalles.length ? (
                <Caracteristicas>
                  <p>Que incluye:</p>
                    <Included>
                  <ul>
                      {atributos.length > 0 &&
                        atributos.map((detail, index) => (
                          <li key={index}>
                            <img src={detail.urlImage} alt={detail.titulo} />
                            <p>{detail.titulo}</p>
                          </li>
                        ))}
                  </ul>
                    </Included>
                </Caracteristicas>
              ) : null}
                {/* <ButtonReserva>Reservar</ButtonReserva> */}

              
                <div>
                  <Calendario />
                  <ButtonReserva>Reservar</ButtonReserva>
                </div>
              
              

            </ProductDetails>
          </Body>
        </CardDetail>

        <Modal isOpen={modalOpen} style={customStyles} ariaHideApp={false}>
          <ImageModal images={imagenes} closeModal={closeModal} />
        </Modal>
      </Detail>
      <Footer />
    </>
  );
};

export default ProductDetail;
