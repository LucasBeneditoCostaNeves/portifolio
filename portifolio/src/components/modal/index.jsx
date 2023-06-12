import { ModalStyle } from "./style";

export const Modal = ({ setModal }) => {
  return (
    <ModalStyle>
      <div>
        <header>
          <h1>Tecnologias Utilizadas</h1>
          <button onClick={() => setModal(false)}>X</button>
        </header>
      </div>
    </ModalStyle>
  );
};
