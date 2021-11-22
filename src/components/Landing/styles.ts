import styled from 'styled-components'

export const LandingWrapper = styled.section`
  height: 48rem;
  position: relative;
  margin-bottom: 10rem;

  h1 {
    font-family: Prompt;
    font-style: normal;
    font-weight: bold;
    font-size: 32px;
    line-height: 36px;
    text-align: center;
    color: #982424;
    margin-top: 6rem;
    margin-bottom: 3rem;
    width: 85%;
    margin-left: auto;
    margin-right: auto;
  }
  p {
    font-family: Prompt;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 27px;
    text-align: center;
    color: #34344f;
    width: 85%;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 3rem;
  }
  button {
    margin: 3rem auto;
  }

  @media (min-width: 992px) {
    .leftSide {
      width: 90%;
      @media (max-width: 1399px) {
        width: 100%;
      }
    }

    h1 {
      font-family: Prompt;
      font-style: normal;
      font-weight: bold;
      font-size: 48px;
      line-height: 62px;
      width: 100%;

      color: #982424;
    }

    p {
      font-family: Prompt;
      font-style: normal;
      font-weight: normal;
      font-size: 18px;
      line-height: 27px;
      width: 100%;

      color: #34344f;
    }
    h1,
    p {
      text-align: left;
    }
    button {
      margin: 3rem 0 0 0;
    }
    .cont {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
    @media (max-width: 1199px) {
      h1 {
        font-size: 34px;
        line-height: 40px;
      }
      p {
        font-size: 16px;
      }
    }
  }

  .image {
    img {
      height: 520px;
    }
  }
  @media (max-width: 992px) {
    button {
      width: 85%;
    }
  }
`
