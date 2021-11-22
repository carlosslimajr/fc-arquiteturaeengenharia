// import { inputStyleCSS } from 'components/commonStyles';
import styled from 'styled-components'

export const ServicesWrapper = styled.section`
  background: #faf6ed;
  height: auto;
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 5.6rem;
  padding-bottom: 5rem;
  padding-top: 6.8rem;

  h2 {
    text-align: left;
    margin-bottom: 2.5rem;
  }
  h4 {
    font-family: Prompt;
    font-style: normal;
    font-weight: 600;
    font-size: 22px;
    line-height: 33px;
    color: #34344f;
    margin-bottom: 1.2rem;
  }
  p {
    font-family: Prompt;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 27px;
    color: #696871;
    margin-bottom: 3.2rem;
    height: 170px;
  }
  .react-multi-carousel-item {
    display: flex;
    transition: all 0.5s;
    img {
      transition: max-height 0.5s;
      margin-top: auto;
      max-height: 90%;
    }
  }
  .react-multi-carousel-item.react-multi-carousel-item--active {
    transition: all 0.5s;
    img {
      max-height: 100%;
      height: 100%;
    }
  }

  @media (min-width: 991px) {
    .container {
      display: grid;
      grid-template-columns: 30% 70%;
      div {
        :nth-child(2) {
          .react-multi-carousel-item {
            img {
              width: 384px;
              max-height: 90%;
            }
          }
          .react-multi-carousel-item.react-multi-carousel-item--active {
            transition: all 0.5s;
            img {
              max-height: 100%;
              height: 100%;
            }
          }
        }
      }
    }
  }

  .bar {
    padding-left: 2.2rem;
    @media (max-width: 991px) {
      padding-left: 1.4rem;
    }
  }
  .counter {
    margin-top: 1.4rem;
    font-family: Prompt;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 28px;

    span {
      color: #34344f;
    }
  }
`

interface ProgresProp {
  progress?: number
}

export const ProgressBar = styled.div<ProgresProp>`
  width: 28rem;
  height: 4px;
  background: #dfdfdf;

  .progress {
    height: 100%;
    width: ${(props) => props.progress + '%'};
    background: #982424;
  }
  @media (max-width: 991px) {
    width: 18rem;
  }
`
