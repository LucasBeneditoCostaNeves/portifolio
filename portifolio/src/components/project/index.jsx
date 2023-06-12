import { ProjectStyle } from "./style";
import info from "../../assents/letter-i.png";

export const Project = ({ img, style, href, name }) => {
  return (
    <ProjectStyle>
      <a href={href} target="_blank">
        <img src={img} alt="" srcset="" className={style} />
        <h1>{name}</h1>
      </a>
    </ProjectStyle>
  );
};
