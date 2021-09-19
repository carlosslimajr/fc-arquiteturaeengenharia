import styled from 'styled-components'

export const FormWrapper = styled.main`
  width: 90%;
  button {
    margin-top: 4rem;
    margin-bottom: 7.2rem;
  }

  form {
    @media (min-width: 991px) {
      border: 2px solid #dadbe0;
      padding: 80px 90px;
    }
  }
  .radio {
    /* border: 1px solid black; */
    display: flex;
    /* justify-content: center; */
    align-items: center;
    input {
      border: 2px solid black !important;
      width: 25px;
      height: 25px;
      color: black;
    }
  }

  .step {
    /* border: 1px solid black; */
    display: flex;
    width: 90%;
    margin: 0 auto;
    justify-content: space-between;
    height: 27px;
    margin-bottom: 3rem;

    .colored {
      color: #982424;
    }
    small.colored {
      background: #982424;
    }
    span {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      font-family: Prompt;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 27px;
      color: #ced4da;

      small {
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background: #ced4da;
        margin-right: 12px;
        .colored {
          background: #982424;
        }
      }
    }
    .linha {
      /* border: 1px solid black; */
      border-bottom: 1px solid #982424;
      width: 60px;
      height: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  .title {
    .borda {
      width: 60%;
      margin: 4.8rem auto;
      /* display: none; */
      border: none;
      border: 1px solid #ced4da;
      @media (min-width: 991px) {
        border: none;
        /* border: 1px solid black; */
      }
    }
    h1 {
      font-family: Prompt;
      font-style: normal;
      font-weight: bold;
      font-size: 3.2rem;
      line-height: 36px;
      /* or 112% */

      text-align: center;
      color: #982424;
      width: 70%;
      margin: 0 auto;
      margin-bottom: 2.4rem;
    }
    p {
      font-family: Prompt;
      font-style: normal;
      font-weight: normal;
      font-size: 18px;
      line-height: 27px;
      /* or 150% */
      /* border: 1px solid black; */
      text-align: center;

      color: #34344f;
    }
  }
  h3 {
    font-family: Prompt;
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 36px;
    /* identical to box height, or 150% */

    color: #982424;
  }
  h5 {
    font-family: Prompt;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 27px;
    color: #982424;
  }

  .checkbox {
    display: flex;

    flex-wrap: wrap;
    align-items: center;
    grid-template-columns: 1fr 1fr;

    input {
      margin-right: 16px;
      width: 24px;
      height: 24px;
    }
    label {
      font-family: Prompt;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 24px;
      color: #495057;
      opacity: 0.9;
      margin-right: 32px;
    }
    .box {
      display: flex;
      align-items: center;
      margin-bottom: 2.5rem;
      label {
        display: flex;
      }
    }
  }
`

export const RightSide = styled.div`
  padding: 0;
  @media (min-width: 991px) {
    padding: 0px 20px;
  }
  .contact {
    height: 403px;
    background: #faf6ed;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: left;
    padding: 57px 10px;
    @media (min-width: 991px) {
      text-align: left;
      padding: 57px 72px;
    }

    h5 {
      font-family: Prompt;
      font-style: normal;
      font-weight: 600;
      font-size: 24px;
      line-height: 36px;
      color: #982424;
      margin-bottom: 30px;
    }
    p {
      margin-bottom: 24px;
      font-family: Prompt;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 24px;
      color: #34344f;
    }
  }

  .services {
    background: #faf6ed;
    margin-top: 40px;
    height: 1478px;
    display: flex;
    flex-direction: column;
    padding-top: 72px;

    h4 {
      margin: 0 auto;
      margin-bottom: 32px;
      font-family: Prompt;
      font-style: normal;
      font-weight: bold;
      font-size: 36px;
      line-height: 54px;
      color: #982424;
    }
    button {
      width: 80%;
      margin: 40px auto;
      background: #faf6ed;
      border: 1px solid #982424;
      font-family: Prompt;
      font-style: normal;
      font-weight: 600;
      font-size: 18px;
      line-height: 21px;
      text-align: center;
      text-transform: uppercase;
      color: #982424;
      width: 344px;
      height: 61px;
    }

    .service {
      width: 80%;
      margin: 0 auto;
      margin-bottom: 4rem;
      h5 {
        font-family: Prompt;
        font-style: normal;
        font-weight: 600;
        font-size: 22px;
        line-height: 33px;
        margin-bottom: 12px;
        color: #34344f;
      }
    }
  }
`
