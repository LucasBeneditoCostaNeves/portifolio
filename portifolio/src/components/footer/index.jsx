import { DivStyle, FooterStyle } from "./style";
import html from "../../assents/html5.png";
import css from "../../assents/css.png";
import js from "../../assents/js.png";
import react from "../../assents/react.png";
import typecript from "../../assents/typescript.png";
import typeorm from "../../assents/typeorm.png";
import onda from "../../assents/onda5.png";
import python from "../../assents/python.png";
import prostgre from "../../assents/postgre.png";

export const Footer = () => {
  return (
    <DivStyle>
      <div className="relative">
        <img src={onda} className="onda" />
      </div>
      <FooterStyle>
        <div className="white">
          <h3>Competências:</h3>
          <div className="icon">
            <img src={js} />
            <img src={typecript} />
            <img src={python} />
            <img src={typeorm} />
            <img src={react} />
            <img src={prostgre} />
            <img src={html} />
            <img src={css} />
          </div>
        </div>
      </FooterStyle>
    </DivStyle>
  );
};
