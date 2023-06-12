import { styled } from "styled-components";

export const ProjectStyle = styled.div`
  display: flex;
  margin: 20px auto;
  width: max-content;
  position: relative;
  width: 298px;
  img {
    width: 280px;
    display: flex;
    margin: 0 auto;
  }

  .info1 {
    position: absolute;
    width: 35px;
    left: 0px;
    z-index: 1;
  }

  .info2 {
    left: 10px;
    position: absolute;
    width: 35px;
  }

  .test {
    width: 260px;
  }

  .info-test {
    width: 100px;
  }

  img:hover {
    transform: scale(1.1); /* Aumenta o tamanho em 20% */
    transition: transform 0.6s ease;
    position: none;
    cursor: pointer;
  }

  @media (min-width: 590px) {
    .height306 {
      height: 306px;
    }
  }

  h1 {
    display: flex;
    margin: 0 auto;
    width: max-content;
    text-decoration: none;
    color: var(--gray-1);
    font-size: 20px;
    font-weight: 600;
  }
`;
