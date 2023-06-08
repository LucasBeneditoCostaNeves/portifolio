import { ProjectStyle } from "./style";
import info from "../../assents/letter-i.png";

export const Project = ({ img, style, styleInfo }) => {
  return (
    <ProjectStyle>
      <img src={info} className={styleInfo} />
      <img src={img} alt="" srcset="" className={style} />
    </ProjectStyle>
  );
};
