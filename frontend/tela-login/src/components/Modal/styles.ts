import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;

  .btn-close {
    border: none;
    background-color: ${(props) => props.theme["red"]};
    color: ${(props) => props.theme["white"]};
    padding: 8px;
    border-radius: 4px;
    margin-right: 8px;
    cursor: pointer;
  }

  .btn-register {
    border: none;
    background-color: ${(props) => props.theme["green"]};
    color: ${(props) => props.theme["white"]};
    padding: 8px;
    border-radius: 4px;
    cursor: pointer;
  }

  .modal {
    background: ${(props) => props.theme["white"]};
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    width: 375px;

    @media (max-width: 397px) {
      margin: 0px 12px;
    }

    .sucessText {
      text-align: center;
    }
  }

  .modal button {
    margin-top: 10px;
  }
`;
