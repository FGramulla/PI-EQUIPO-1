import { Link } from "react-router-dom";
import styled from "styled-components";

export const CardContainer = styled.div`
  
  height: 310px;
  width: 450px;
  margin: auto;
  background-color: rgba(225, 225, 225, 0.7);
  border-radius: 8px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  box-shadow: 0px 4px 4px 0px rgba(180, 180, 180, 0.62);
  padding: 16px;
  box-sizing: border-box;
  transition: all ease-in-out 0.2s;

  &:hover {
    border: 1px solid rgba(255, 255, 255, 0.6);
    transform: scale(1.02);
  }

  @media (max-width: 500px) {
    width: 90%;
    margin: auto;
  }
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: 200px;

  @media (max-width: 600px) {
    height: 150px;
  }
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Title = styled.p`
  font-size: 24px;
  font-weight: bold;
  margin: 0;
  padding: 0;
  margin-bottom: 10px;
  color: white;

  @media (max-width: 600px) {
    font-size: 18px;
  }
`;

export const Price = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 20px;
  color: brown;
  font-weight: bold;
  margin: 12px 0;

  span {
    font-size: 14px;
    text-decoration: underline;
    color: black;
    font-weight: normal;
    margin-right: 10px;
  }
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const ButtonDetails = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: white;
  font-weight: 500;
  background-color: #999;
  font-size: 16px;
  width: 100px;
  height: 28px;
  border-radius: 8px;

  &:hover {
    background-color: white;
    color: black;
  }

  @media (max-width: 600px) {
    width: 100%;
    margin-top: 16px;
  }
`;
