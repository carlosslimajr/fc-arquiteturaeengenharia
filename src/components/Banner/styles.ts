import styled from 'styled-components'

export const BannerWrapper = styled.div`
  background: #faf6ed;
  position: relative;
  height: 380px;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 96%;
  margin: 0 auto 5.6rem auto;
  padding: 8rem 3.2rem;
  margin-bottom: 0px;
  @media (max-width: 991px) {
    height: 360px;
  }

  .iconBackground {
    width: 102px;
    height: 102px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #982424;
    margin: 0 auto;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    top: -51px;
    img {
      width: 60px;
      height: 60px;
    }
  }

  p {
    font-family: ${(props) => props.theme.font.primary};
    font-style: normal;
    font-weight: 600;
    font-size: 32px;
    line-height: 48px;
    text-align: center;
    color: #34344f;
    margin-bottom: 3rem;

    @media (max-width: 992px) {
      font-family: ${(props) => props.theme.font.primary};
      font-style: normal;
      font-weight: 600;
      font-size: 19px;
      line-height: 28px;
      text-align: center;
      color: #34344f;
      /* max-width: 250px; */
      /* border: 1px solid black; */
      width: 120%;
      max-width: 600px;
      /* width: 110%; */
      padding: 0 15px;
    }
  }
  @media (min-width: 991px) {
    margin-bottom: 0px;
    p {
      width: 80%;
      margin: 0 auto;
      font-family: ${(props) => props.theme.font.primary};
      font-style: normal;
      font-weight: 600;
      font-size: 32px;
      line-height: 48px;
      margin-top: 0rem;
      margin-bottom: 3rem;
      text-align: center;
      color: #34344f;
    }
  }
`
