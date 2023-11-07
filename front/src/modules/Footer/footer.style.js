import styled from "styled-components";

export const FooterWrapper = styled.div`
  position: absolute;
  bottom: auto;
  width: 100%;
  min-height: 80px;
  background: linear-gradient(180deg, rgba(74, 87, 0, 0) 0%, #4a5700 97.92%),
    linear-gradient(180deg, rgba(211, 244, 9, 0) 0%, #c5e324 100%),
    linear-gradient(180deg, rgba(74, 87, 0, 0) 0%, #4a5700 97.92%);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 32px 0 32px;
`;

export const TeamDiv = styled.div`
  display: flex;
  align-items: end;

  img{
    width: 64px;
    height: auto;
  }

  p{
    margin-left: 16px;
    margin-left: 10px;
  }

  @media(max-width: 500px){
    img{
      width: 40px;
    }
    p{
      font-size: 12px;
    }
  }
`; 

export const SocialMedia = styled.div`
  display: flex;
  gap: 16px;
  cursor: pointer;

  img{
    width: 32px;
    height: auto;

    &:hover{
      transition: ease .5s;
      transform: scale(1.2);
    }

  }

  @media(max-width: 500px){
    img{
      width: 25px;
    }
  }
`;