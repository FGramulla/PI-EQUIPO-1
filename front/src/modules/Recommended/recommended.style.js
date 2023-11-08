import styled from "styled-components";

export const TitleSeccion = styled.h2`
  margin: auto
  padding: 30px 30px;
  color: white;
  font-size: 28px;
  font-weight: 700;
  align-self: flex-start;
`;

export const RecommendedWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 32px;
  

  @media(max-width: 1000px){
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
   @media(max-width: 800px){
    width: 90%;
    max-height: 60vh;
    margin: auto
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    &::-webkit-scrollbar {
      width: 6px;
      }
      /* Track */
      ::-webkit-scrollbar-track {
        background: #f1f1f1;
        box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
        border-radius: 10px;
        }
        /* Handle */
        ::-webkit-scrollbar-thumb {
          background: ${({ theme }) => (theme === 'light' ? '#ddd' : '#5c5b5e')};
          border-radius: 10px;
          }
          
 
  }
`;
