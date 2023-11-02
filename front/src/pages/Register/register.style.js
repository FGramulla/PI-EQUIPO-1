import styled from "styled-components";

export const LoginWrapper = styled.div`
  margin: 0 auto;
  margin-top: 150px;
  width: 80%;
  max-width: 500px;
  height: 100%;
  color: red;
  background: linear-gradient(
    45deg,
    rgba(255, 255, 255, 0.41220238095238093) 0%,
    rgba(255, 255, 255, 0.47942927170868344) 7%,
    rgba(99, 250, 134, 0.35898109243697474) 100%,
    rgba(0, 212, 255, 1) 100%
  );
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-radius: 16px;
`;

export const Label = styled.label`
  width: 100%;
  height: 19px;
  color: #000;
  margin: 10px;
  font-size: 20px;
  font-weight: 600;
`;

export const Inputs = styled.input`
  width: 100%;
  border-radius: 8px;
  border: 1px solid rgba(129, 129, 129, 0.5);
  padding: 10px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  font-size: 16px;
  margin-bottom: 12px;

`;

export const SoyAdmin = styled.div`
  font-size: 15px;
  font-weight: 600;
  margin: 15px 0;
  color: black;
  display: flex;
  justify-content: space-between;
  align-self: flex-start;
`;

export const Button = styled.button`
  width: 100%;
  height: 34px;
  font-size: 18px;
  font-weight: bold;
  align-self: center;
  border-radius: 12px;
  border: 0.5px solid rgba(0, 0, 0, 0.5);
  background: linear-gradient(
    0deg,
    #5fbe6f 8.38%,
    rgba(0, 254, 41, 0.4) 113.51%
  );
  cursor: pointer;

  &:hover {
    background: rgba(0, 0, 0, 0.7);
    color: wheat;
  }
`;

export const InputCheckBox = styled.input`
  margin-left: 5px;
  margin-right: 10px;
`;
