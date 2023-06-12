import { styled } from "styled-components";

export const DivStyle = styled.div`
  .onda {
    width: 100%;
    position: inherit;
    top: 2px;
  }

  .relative {
    position: relative;
  }
`;

export const FooterStyle = styled.div`
  background-color: #f32231;
  padding: 30px 0px;
  img {
    width: 50px;
    height: 50px;
    margin-left: 14px;
    margin-bottom: 10px;
    border-radius: 4px;
  }

  .white {
    background-color: white;
    padding: 20px 10px;
    width: 80%;
    max-width: 500px;
    margin: 0 auto;
    border-radius: 8px;
  }
  .icon {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

  h3 {
    font-size: 24px;
    display: flex;
    width: max-content;
    margin: 0 auto 13px;
    font-weight: 700;
  }
`;
