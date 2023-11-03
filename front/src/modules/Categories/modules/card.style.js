import styled from "styled-components";

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 80px;
  height: 95px;
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
    min-height: 70%;

    img {
      width: 64px;
      height: auto;
    }
  }

  @media (max-width: 600px) {
    width: 40px;
    height: 50px;
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