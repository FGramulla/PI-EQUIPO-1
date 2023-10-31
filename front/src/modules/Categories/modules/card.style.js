import styled from "styled-components";

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 70px;
  height: 85px;
  background-color: var(--color-orange);
  box-shadow: -2px 4px 8px 1px rgba(0, 0, 0, 0.62);
  border-radius: 8px;
  color: white;
  font-size: 12px;
  padding: 8px;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
    color: black;

    .imgContainer {
      img {
        filter: brightness(0);
      }
    }
  }

  .imgContainer {
    min-height: 50%;

    img {
      width: 50px;
      height: auto;
    }
  }

  @media (max-width: 950px) {
    width: 40px;
    height: 50px;
    margin-top: 20px;
    margin-left: auto;
    margin-right: 10px;
    .imgContainer {
      img {
        width: 34px;
        height: 35px;
      }
    }
    p {
      display: none;
    }
  }
`;
