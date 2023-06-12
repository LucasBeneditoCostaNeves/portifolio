import { styled } from "styled-components";

export const ModalStyle = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  top: 0;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    background-color: white;
    padding: 20px 20px;
    border-radius: 8px;
    width: 80%;
    max-width: 300px;
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  button {
    border: none;
    border-radius: 100px;
    background-color: #f32231;
    padding: 8px 10px;
    color: white;
    font-weight: 600;
  }
`;
