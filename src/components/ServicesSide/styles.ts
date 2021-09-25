import styled from 'styled-components'

export const ServicesSideWrapper = styled.div`
  padding: 0;
  @media (min-width: 991px) {
    padding: 0px 20px;
  }

  .last {
    text-align: center;
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
      line-height: 30px;
      color: #982424;
      margin-bottom: 20px;
    }
    p {
      margin-bottom: 24px;
      font-family: Prompt;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 24px;
      color: #34344f;
      :nth-child(1) {
        margin-bottom: 1.4rem;
      }
      @media (max-width: 991px) {
        margin-left: auto;
        margin-right: auto;
        max-width: 320px;
      }
    }
  }

  .services {
    background: #faf6ed;
    margin-top: 40px;
    /* height: 1578px; */
    padding-bottom: 6rem;
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
    button.button {
      width: 100%;
      margin: 0px auto;
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
      padding: 2rem;
      transition: all 0.2s;
      :hover {
        background: #982424;
        color: #ffffff;
        transform: scale(1.05);
        border-radius: 10px;
        box-shadow: 0 0 11px rgba(33, 33, 33, 0.2);
      }
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
