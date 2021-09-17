import styled from 'styled-components'

export const AboutWrapper = styled.div`
  /* display: grid; */
  /* grid-template-columns: 1fr 1fr; */
  /*
  @media (max-width: 991px) {
    border: 1px solid blue;
    grid-template-columns: 1fr;
  } */
  position: relative;

  img {
    width: 80%;
    margin: 0 auto;
  }

  .text {
    position: relative;
    background: #faf6ed;
    padding: 50px;
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

  .leftSide {
    /* border: 1px solid black; */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    /* padding: 20px; */
    .title {
      margin-top: 60px;
      margin-left: 100px;
    }
    .colored {
      /* border: 1px solid black; */
      background: #faf6ed;
      display: flex;
      justify-content: center;
      flex-direction: column;
      /* padding: 100px; */
      padding: 50px;
      height: 400px;

      .bold {
        font-weight: 600;
      }
    }
  }
`
