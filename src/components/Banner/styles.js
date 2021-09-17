import styled from 'styled-components'

export const BannerWrapper = styled.div`
  margin-top: 120px;
  position: relative;
  height: 380px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: #faf6ed;
  padding: 150px;

  .iconBackground {
    width: 102px;
    height: 102px;
    border: 1px solid black;
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
    font-family: Prompt;
    font-style: normal;
    font-weight: 600;
    font-size: 32px;
    line-height: 48px;
    text-align: center;
    color: #34344f;
    margin-top: 15px;
  }
`
