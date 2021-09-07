import styled from 'styled-components';

export const ServicesWrapper = styled.header`
  background: #faf6ed;
  height: 720px;
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 90px;
  margin-top: 72px;
  /* align-items: center; */

  .grid {
    /* border: 1px solid blue; */
    display: grid;
    grid-template-columns: 300px 1fr;

    .leftSide {
      .buttonLeft {
        /* border: 3px solid black; */
        width: 100px;
        height: 72px;
        border: none;
        background: none;
        border: 2px solid rgba(152, 36, 36, 50%);
        margin-top: 56px;
        margin-right: 32px;
      }
      .buttonRight {
        width: 100px;
        height: 72px;
        border: none;
        background: none;
        border: 2px solid rgba(152, 36, 36, 50%);
      }
    }

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
    }
    p {
      font-family: Prompt;
      font-style: normal;
      font-weight: normal;
      font-size: 18px;
      line-height: 27px;
      color: #696871;
      margin-bottom: 30px;
      /* border: 1px solid black; */
    }
  }
`;
