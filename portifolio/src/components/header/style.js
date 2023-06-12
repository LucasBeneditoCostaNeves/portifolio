import { styled } from "styled-components";

export const HeaderStyle = styled.header`
  background-color: #f32231;
  padding-top: 10px;
  padding-left: 10px;
  padding-bottom: 40px;

  .ola {
    color: var(--gray-9);
    font-size: 10px;
    font-weight: 700;
  }

  img {
    width: 28px;
    height: 28px;
  }

  header > div {
    display: flex;
  }

  .flex {
    display: flex;
    align-items: center;
    font-size: 70px;
    color: var(--gray-9);
  }

  h1 {
    color: var(--gray-9);
    font-size: 50px;
    font-weight: 900;
  }

  h1:hover {
    transform: scale(1.02); /* Aumenta o tamanho em 20% */
    transition: transform 0.6s ease;
  }

  img {
    margin-left: 5px;
  }

  img:hover {
    transform: scale(1.5); /* Aumenta o tamanho em 20% */
    transition: transform 0.6s ease;
  }

  h2 {
    font-size: 10px;
    color: white;
    display: flex;
    flex-direction: row-reverse;
    width: 225px;
    float: right;
    margin: 0px 10px 0px 0px;
  }

  @media (min-width: 350px) {
    h1 {
      font-size: 55px;
    }
  }

  @media (min-width: 400px) {
    h1 {
      font-size: 60px;
    }
  }

  @media (min-width: 450px) {
    h1 {
      font-size: 70px;
    }
  }

  @media (min-width: 500px) {
    h1 {
      font-size: 80px;
    }
  }

  @media (min-width: 550px) {
    h1 {
      font-size: 89px;
    }
    h2 {
      font-size: 13px;
      width: 300px;
    }
  }

  @media (min-width: 600px) {
    h1 {
      font-size: 94px;
    }
    .ola {
      font-size: 15px;
    }
  }

  @media (min-width: 650px) {
    h1 {
      font-size: 100px;
    }
    img {
      width: 45px;
      height: 45px;
      margin-left: 15px;
    }
  }

  @media (min-width: 700px) {
    h1 {
      font-size: 110px;
    }
  }

  @media (min-width: 750px) {
    h1 {
      font-size: 120px;
    }
  }

  @media (min-width: 800px) {
    h1 {
      font-size: 129px;
    }

    .ola {
      font-size: 20px;
    }
  }

  @media (min-width: 850px) {
    h1 {
      font-size: 137px;
    }

    .onda {
      height: 1px;
    }
  }

  @media (min-width: 900px) {
    h1 {
      font-size: 145px;
    }

    h2 {
      font-size: 16px;
      width: 400px;
    }
  }

  @media (min-width: 950px) {
    h1 {
      font-size: 152px;
    }
  }

  @media (min-width: 1000px) {
    h1 {
      font-size: 160px;
    }
  }

  @media (min-width: 1050px) {
    h1 {
      font-size: 169px;
    }
  }

  @media (min-width: 1100px) {
    h1 {
      font-size: 178px;
    }
  }

  @media (min-width: 1150px) {
    h1 {
      font-size: 188px;
    }
  }

  @media (min-width: 1200px) {
    h1 {
      font-size: 194px;
    }
  }

  @media (min-width: 1250px) {
    h1 {
      font-size: 200px;
    }
  }

  @media (min-width: 1300px) {
    h1 {
      font-size: 205px;
    }
  }

  @media (min-width: 1350px) {
    h1 {
      font-size: 210px;
    }
  }

  @media (min-width: 1400px) {
    h1 {
      font-size: 215px;
    }
  }

  @media (min-width: 1450px) {
    h1 {
      font-size: 220px;
    }
  }

  @media (min-width: 1500px) {
    h1 {
      font-size: 225px;
    }
  }
`;
