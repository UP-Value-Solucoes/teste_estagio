import styled from "styled-components";

export const ContainerInput = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 12px;

  label {
    color: ${(props) => props.theme["green-800"]};
    margin-bottom: 4px;
    font-weight: 400;
  }

  input {
    border: 1px solid ${(props) => props.theme["gray-200"]};
    padding: 8px;
  }

  input::placeholder {
    color: #bebcbc;
    font-style: italic;
  }
`;
