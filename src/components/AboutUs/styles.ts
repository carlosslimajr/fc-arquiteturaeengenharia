import styled from 'styled-components'

export const AboutWrapper = styled.div`
  margin-bottom: 9.6rem !important;
  position: relative;

  /* border: 1px solid black; */
  img {
    width: 80%;
    margin: 0 auto;
  }

  @media (max-width: 992px) {
    .text {
      position: relative;
      background: #faf6ed;
      padding: 30px 40px;
      text-align: center;
      &::after {
        content: '';
        position: absolute;
        margin-left: auto;
        margin-right: auto;
        left: 0;
        right: 0;
        top: -80px;
        width: 100%;
        height: 40%;
        position: absolute;
        z-index: -1;
        background: #faf6ed;
      }
    }
  }
  p {
    font-family: Prompt;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 27px;
    /* or 150% */

    color: #34344f;
  }
  /* @media (max-width: 992px) { */
  .bold {
    font-family: Prompt;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 27px;
    /* or 150% */

    color: #34344f;
  }
  /* } */
  .about {
    @media (min-width: 991px) {
      display: grid;
      grid-template-columns: 1fr 1fr;
      .leftside {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        h2 {
          padding-left: 5rem;
          padding-top: 1rem;
        }
      }
      .text {
        width: 100%;
        height: 36rem;
        background: #faf6ed;
        padding: 50px;
      }
      .rightside {
        img {
          width: 600px;
          height: auto;
        }
      }
    }
  }
  @media (max-width: 1199px) {
    .text {
      p {
        /* border: 1px solid black; */
        font-size: 16px;
        line-height: 20px;
      }
    }
  }
`
