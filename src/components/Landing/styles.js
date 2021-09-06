/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const LandingWrapper = styled.div`
  margin-top: 30px;
  margin-bottom: 60px;
  display: grid;
  grid-template-columns: 40% 60%;
  /* border: 1px solid black; */
  .leftSide {
    display: flex;
    flex-direction: column;
    padding: 40px;
  }
  img {
    width: 100%;
    height: 545px;
  }
  h1 {
    font-family: Prompt;
    font-style: normal;
    font-weight: bold;
    font-size: 48px;
    line-height: 62px;
    color: #982424;
  }
`;
