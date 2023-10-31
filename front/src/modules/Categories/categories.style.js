import styled from "styled-components";

export const CategoriesWrapper = styled.div`
  width: 40%;
  display: flex;
  text-align: center;
  justify-content: space-between;
  margin: auto;
  margin-top: 12px;

  @media (max-width: 500px) {
    display: none;
  }
`;