import React, { useEffect, useState } from "react";
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
import { getProductById } from "../../services/product";
import flecha from "../../assets/flecha.png";
import { Link } from "react-router-dom";
import Modal from 'react-modal';
import ImageModal from "./modules/ImageModal";
import Footer from "../../modules/Footer/index";


const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '100%',
    maxWidth: '1000px',
    height: '80vh',
  },
};


const ProductDetail = () => {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [imagePrincipal, setImagePrincipal] = useState(null);
  const [selected, setSelected] = useState(0);

  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);

    getProductById(id).then((result) => {
      setProduct(result);
      if (result && result.images.length > 0) {
        setImagePrincipal(result.images[0].img);
      }
    });
  }, []);

  if (!product) {
    return <p>Cargando...</p>;
  }

  const { images, title, dayPrice, description, category, details } = product;

  const handleSecondaryImageClick = (index) => {
    if (selected !== index) {
      setImagePrincipal(images[index].img);
      setSelected(index);
    }
  };

  const handleImageClick = ()=> {
    console.log('click en la imagen');
    setModalOpen(true);
  }

  const closeModal = ()=> {
    setModalOpen(false);
  }

  return (
    <>
    <Detail>
      <CardDetail>
        <Header>
          <Link to={"/"}>
            <img src={flecha} alt="flecha" />
            Volver
          </Link>
          <Title>{title}</Title>
        </Header>
        <Body>
          <Images>

            <ImagePrincipal>
              <img src={imagePrincipal} alt={images[0].alt} onClick={handleImageClick}/>
            </ImagePrincipal>

            <ImagesSecondaries>
              {images.map((image, index) => (
                <img
                  src={image.img}
                  alt={image.alt}
                  key={index}
                  onClick={() => handleSecondaryImageClick(index)}
                  className={selected === index ? "selected" : ""}
                />
              ))}
            </ImagesSecondaries>
            
          </Images>

          <ProductDetails>
            <TextDetails>{description}</TextDetails>
            <Categories>Categoría: {category}</Categories>
            <Price>$ {dayPrice} x día</Price>
            {details.length ? (
              <Caracteristicas>
                <p>Que incluye:</p>
                <ul>
                  <Included>
                    {details.map((detail, index) => (
                      <li key={index}>{detail.name}</li>
                    ))}
                  </Included>
                </ul>
              </Caracteristicas>
            ) : null}
            <ButtonReserva>Reservar</ButtonReserva>
          </ProductDetails>
        </Body>
      </CardDetail>
      
      <Modal
        isOpen={modalOpen}
        style={customStyles}
        ariaHideApp={false}
      >

        <ImageModal images={images} closeModal={closeModal}/>

      </Modal>
    </Detail>
    <Footer />
    </>
  );
};

export default ProductDetail;
