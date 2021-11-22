import styled from 'styled-components'

export const FooterWrapper = styled.footer`
  width: 100%;
  display: grid;
  padding: 60px 0px;
  font-family: ${(props) => props.theme.font.primary};
  background: #faf6ed;
  img {
    margin-bottom: 30px;
  }
  section {
  }

  .copyright {
    text-align: center;
    font-family: Usual;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 24px;
    margin-top: 3rem;
    @media (min-width: 991px) {
      border-top: 3px solid rgba(52, 52, 79, 0.1);
      padding-top: 2.4rem;
    }
  }

  .grid {
    section {
      &:nth-child(2),
      &:nth-child(3),
      &:nth-child(4) {
        margin-top: 35px;
      }
    }
    .text {
      font-family: ${(props) => props.theme.font.primary};
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 24px;
      color: #34344f;
      width: 80%;
      margin-top: 1.6rem;
    }

    h5 {
      font-family: ${(props) => props.theme.font.primary};
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 24px;
      color: #982424;
      margin-bottom: 2.4rem;
    }
    ul {
      list-style-type: none;
      padding: 0;

      li {
        color: #34344f;
        margin-right: 25px;
        font-family: ${(props) => props.theme.font.primary};
        font-style: normal;
        font-weight: normal;
        margin-bottom: 16px;
        line-height: 24px;
        &:hover {
          cursor: pointer;
          color: #982424;
        }
      }
    }
  }
  @media (max-width: 991px) {
    p {
      width: 100%;
    }
    .grid {
      .text {
        width: 100%;
      }
      ul {
        li {
          margin-right: 0px;
        }
      }
      button {
        margin: 4rem auto;
        height: 60px;
        a {
          display: none;
          :hover {
          }
        }
      }
    }

    section {
      width: 100%;
      text-align: center;
      border-bottom: 3px solid #dfdfdf;
    }
  }
`
