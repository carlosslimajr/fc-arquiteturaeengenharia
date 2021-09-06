/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const AboutWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  img{
    width: 100%;
    height: 545px;
  }
  
  .leftSide{
    /* border: 1px solid black; */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    /* padding: 20px; */
    .title{
      margin-top: 60px;
      margin-left: 100px;
    }
    .colored{
      /* border: 1px solid black; */
      background: #FAF6ED;
      display: flex;
      justify-content: center;
      flex-direction: column;
      /* padding: 100px; */
      padding: 50px;
      height: 400px;

      .bold{
        font-weight: 600;
      }
    }
  }
`;
