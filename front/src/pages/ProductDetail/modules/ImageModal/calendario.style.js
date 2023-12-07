import styled from "styled-components";


export const Input = styled.input`
  width: 75%;
  padding: 10px;
  border-radius: 8px;
  border: none;
  font-size: 15px;

  @media all and (max-width: 450px) {
    width: 100%;
    font-size: 15px;
    }
;`

export const Label = styled.label`
  width: 45px;
  height: 19px;
  color: white;
  margin-top: 10px;
  margin-right: 5px;
  font-family: Roboto;
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.4px;
  text-align: left;
`;


export const DateForm = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: start;
  
  @media all and (max-width: 450px) {
  display: inline-block;
  font-size: 15px;
  }
`;

export const ButtonSearch = styled.button`
  margin-left: 20px;
  width: 37px;
  height: 37px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 8px;

  @media all and (max-width: 450px) {
    margin-top: -51px;
    }

`;

