import styled from 'styled-components';

export const ServicesWrapper = styled.header`
  border: 1px solid black;
  background: rgba(240, 206, 184, 0.12);
  height: 600px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .grid {
    /* border: 1px solid blue; */
    display: grid;
    grid-template-columns: 300px 1fr;

    h3 {
      font-family: Prompt;
      font-style: normal;
      font-weight: bold;
      font-size: 36px;
      line-height: 54px;
      font-weight: 700;
      margin-bottom: 30px;
      /* identical to box height, or 150% */

      color: #982424;
    }
    .subtitle {
      font-family: Prompt;
      font-style: normal;
      font-weight: 600;
      font-size: 22px;
      line-height: 33px;
      /* identical to box height, or 150% */

      color: #34344f;
      p {
        font-family: Prompt;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 27px;
        /* or 150% */

        color: #696871;
      }
    }

    .leftSide {
      /* padding: 50px   ; */
      /* border: 1px solid red; */
    }
  }
`;
