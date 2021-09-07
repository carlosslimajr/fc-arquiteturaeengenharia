/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const ContactWrapper = styled.div`
  background-image: url('contact-background.png'), linear-gradient(269.99deg, #d7b56d 0.01%, #982424 99.99%);

  height: 320px;

  .content {
    display: grid;
    grid-template-columns: 40% 55%;
    position: relative;

    aside {
      margin-top: 30px;

    }
    img {
      position: absolute;
      left: 50px;
      top: -101px;
      width: 350px;
      height: auto;
    }
    h3 {
      font-family: Prompt;
      font-style: normal;
      font-weight: bold;
      font-size: 32px;
      line-height: 36px;

      color: #ffffff;
    }
    p {
      font-family: Prompt;
      font-style: normal;
      font-weight: 600;
      font-size: 18px;
      line-height: 27px;
      color: #ffffff;
    }
    button {
      background: #ffffff;
      color: rgba(152, 36, 36, 1);
    }
  }
`;
