import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const ContainerForm = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: column;
  padding: 20px;
  width: 430px;
  background: ${(props) => props.theme["white-100"]};
  border: 1px solid rgba(147, 184, 189, 0.8);
  border-radius: 6px;
  -webkit-box-shadow: 10px 10px 5px -3px rgba(0, 0, 0, 0.58);
  -moz-box-shadow: 10px 10px 5px -3px rgba(0, 0, 0, 0.58);
  box-shadow: 10px 10px 5px -3px rgba(0, 0, 0, 0.58);

  @media screen and (max-width: 453px) {
    margin: 10px;
  }

  h1 {
    text-align: center;
    color: ${(props) => props.theme["green-800"]};
    font-family: Arial, sans-serif;
    font-weight: bold;
  }

  h1:after {
    content: " ";
    display: block;
    width: 100%;
    height: 2px;
    margin-top: 10px;
    background: linear-gradient(
      to right,
      transparent 0%,
      rgba(147, 184, 189, 0.8) 20%,
      rgba(147, 184, 189, 1) 53%,
      rgba(147, 184, 189, 0.8) 79%,
      transparent 100%
    );
  }

  .textError {
    margin-top: 4px;
    color: ${(props) => props.theme["red"]};
  }

  .acessError {
    text-align: center;
    color: ${(props) => props.theme["red"]};
  }

  .buttonRegister {
    border: none;
    background: none;
    margin-left: 12px;
    color: ${(props) => props.theme["green-800"]};
    cursor: pointer;
  }
`;

export const SubmitButton = styled.button`
  background: rgb(61, 157, 179);
  padding: 8px 5px;
  color: #fff;
  font-size: 20px;
  border: 1px solid #fff;
  margin-bottom: 10px;
  text-shadow: 0 1px 1px #333;
  cursor: pointer;
  margin-top: 12px;
`;

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: flex-end;
`;
