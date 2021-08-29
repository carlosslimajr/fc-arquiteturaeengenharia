import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  width: 100%;
  display: grid;
  padding: 60px;
  border: 1px solid black;
  font-family: Prompt;
  background: #faf6ed;
  img {
    margin-bottom: 30px;
  }
  section {
  }

  .copyright {
    /* border: 1px solid black; */
    border-top: 3px solid rgba(52, 52, 79, 0.1);
    text-align: center;
    font-family: Usual;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 24px;
  }

  .grid {
    display: grid;
    /* border: 1px solid black; */
    margin-bottom: 20px;

    section {
      &:nth-child(2),
      &:nth-child(3),
      &:nth-child(4) {
        margin-top: 35px;
      }
    }

    grid-template-columns: 1fr 1fr 1fr 1fr;
    /* border: 1px solid blue; */
    /* padding-bottom: 80px; */
    .text {
      font-family: Prompt;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 24px;
      color: #34344F;
      width: 80%;
      /* or 150% */
    }

    h5 {
      font-family: Prompt;
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 24px;
      color: #982424;
    }
    ul {
      list-style-type: none;
      padding: 0;

      li {
        color: #34344F;
        margin-right: 25px;
        font-family: Prompt;
        font-style: normal;
        font-weight: normal;
        margin-bottom: 16px;
        line-height: 24px;
        /* color: #982424; */
        &:hover {
          cursor: pointer;
          color: #982424;
        }
      }
    }
  }
`;
