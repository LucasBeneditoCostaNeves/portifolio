import { HeaderStyle } from "./style";
import gitHub from "../../assents/github.png";
import linkedin from "../../assents/linkedin-logo.png";
import onda1 from "../../assents/img10.png";

export const Header = () => {
  return (
    <>
      <HeaderStyle>
        <h3 className="ola">OI 👋 EU SOU O LUCAS</h3>
        <div className="flex">
          <h1 id="test" className="test">
            FRONT
          </h1>
          <a href="https://github.com/LucasBeneditoCostaNeves" target="_blank">
            <img src={gitHub} />
          </a>
          <img src={linkedin} alt="" srcset="" />
        </div>
        <h1>DEVELOPER</h1>
        <h2>
          DESENVOLVEDOR FULLSTACK, PROCURANDO MINHA PRIMEIRA OPORTUNIDADE NA
          ÁREA
        </h2>
      </HeaderStyle>
      <img src={onda1} className="onda" />
    </>
  );
};
