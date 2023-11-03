import styled from "styled-components";

export const TitleSeccion = styled.h2`
  margin-top: 20px;
  margin-bottom: -12px;
  color: white;
  font-size: 28px;
  font-weight: 700;
  align-self: flex-start;
`;

export const RecommendedWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 32px;
  padding: 10px 0px 100px 0px;

  @media(max-width: 950px){
    justify-content: center;
    text-align:left;
    
  }

  .scrollVertical{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 8px;
    flex-wrap: wrap;
    gap: 32px;
    padding: -20px 0px 100px 0px;
    overflow-x: hidden;
    overflow-y: scroll;
    height: 315px;
   }
  
   @media(max-width: 950px){
    width: 100%;
    display: flex;
    justify-content: center;
    text-align:center;
    flex-wrap: wrap;
  }

  .scrollVertical{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 8px;
    flex-wrap: wrap;
    gap: 32px;
    padding: -20px 0px 100px 0px;
    overflow-x: hidden;
    overflow-y: scroll;
    height: 315px;
   }
  
   @media(max-width: 950px){
    justify-content: center;
 
  }
`;
