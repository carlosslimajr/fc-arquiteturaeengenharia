import styled from 'styled-components'

export const BlogWrapper = styled.div`
  background-image: url('group.png'),
    linear-gradient(269.99deg, #ff7433 0.01%, #2e4c6f 70.99%, #2d4c71 99.99%);
  background-repeat: no-repeat;
  height: 326px;
  /* margin-top: 34rem; */

  .backgroundtop {
    /* width: 34rem; */
    /* border: 3px solid black; */
    /* height: 34rem; */
  }

  .content {
    display: grid;
    grid-template-columns: 50% 50%;
    position: relative;
    background-repeat: no-repeat;
    height: 100%;
    aside {
      margin-top: 30px;
    }
    .blogImage {
      position: absolute;
      left: 160px;
      top: -50px;
    }

    h3 {
      font-family: Kanit;
      font-style: normal;
      font-weight: 600;
      font-size: 32px;
      line-height: 48px;
      color: #ffffff;
      margin-top: 3rem;
    }
    p {
      font-family: Raleway;
      font-style: normal;
      font-weight: 600;
      font-size: 24px;
      line-height: 36px;

      color: #ffffff;
      margin-bottom: 1.6rem;
    }
  }
`
export const Background = styled.div`
  height: 23.7rem;
  margin-top: 8.5rem;
  background-image: url('footer-background.png');
`
