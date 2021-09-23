// import { inputStyleCSS } from 'components/commonStyles';
import styled from 'styled-components'

export const ServicesWrapper = styled.div`
  /* border: 2px solid black; */
  background: #faf6ed;
  height: auto;
  display: flex;
  flex-direction: column;
  width: 100%;
  /* margin: 8rem 0; */
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
    /* or 150% */
    /* border: 1px solid black; */
    color: #696871;
    margin-bottom: 3.2rem;
    height: 170px;
  }
  .react-multi-carousel-item {
    display: flex;
    transition: all 0.5s;
    img {
      /* border: 1px solid red; */
      transition: max-height 0.5s;
      margin-top: auto;
      max-height: 90%;
    }
  }
  .react-multi-carousel-item.react-multi-carousel-item--active {
    /* border: 2px solid blue; */
    transition: all 0.5s;
    img {
      max-height: 100%;
      height: 100%;
    }
  }
  .swiper {
    /* width: 400px; */
    width: 80%;
    height: 320px;
    position: relative;

    .swiper-pagination {
      /* width: 3px; */
      /* bottom: 0 !important; */
      /* position: absolute; */
      /* bottom: 10px; */
      /* top: 310px; */
      /* border: 1px solid black; */
      /* background: black; */
      /* position: relative; */
      margin-top: 310px;
    }
  }

  .swiper-slide {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 18px;
    font-size: 22px;
    font-weight: bold;
    color: #fff;
  }

  .swiper-slide:nth-child(1n) {
    /* border: 1px solid black; */
    /* background-color: rgb(206, 17, 17); */
    /* background: #ffffff; */
    img {
      width: 100%;
    }
  }

  .swiper-slide:nth-child(2n) {
    /* background-color: rgb(0, 140, 255); */
    background: none;
    /* background: #ffffff; */
    background: rgba(0, 0, 0, 0);
  }

  .swiper-slide:nth-child(3n) {
    /* background-color: rgb(10, 184, 111); */
    background: rgba(0, 0, 0, 0);
  }

  .swiper-slide:nth-child(4n) {
    /* background-color: rgb(211, 122, 7); */
    background: rgba(0, 0, 0, 0);
  }

  .swiper-slide:nth-child(5n) {
    /* background-color: rgb(118, 163, 12); */
    background: rgba(0, 0, 0, 0);
  }

  .swiper-slide:nth-child(6n) {
    /* background-color: rgb(180, 10, 47); */
    background: rgba(0, 0, 0, 0);
  }

  .swiper-slide:nth-child(7n) {
    /* background-color: rgb(35, 99, 19); */
    background: rgba(0, 0, 0, 0);
  }

  .swiper-slide:nth-child(8n) {
    /* background-color: rgb(0, 68, 255); */
    background: rgba(0, 0, 0, 0);
  }

  .swiper-slide:nth-child(9n) {
    /* background-color: rgb(218, 12, 218); */
  }

  .swiper-slide:nth-child(10n) {
    /* background-color: rgb(54, 94, 77); */
  }

  .slide-box {
    /* border: 1px solid blue; */
    width: 100%;
  }
  .slide {
    /* border: 3px solid blue;1111 */
  }
  .carousel2 {
    border: 1px solid black;
    height: 700px;
    /* width: 600px; */
    /* display: grid; */
    /* grid-template-columns: 1fr 1fr; */
    img {
      border: 1px solid black;
      width: 217px;
    }
  }
  .carousel {
    /* border: 3px solid black; */
    overflow: auto;
    overflow: hidden;

    height: 400px;
    div {
      img {
        /* height: 500px; */
        /* margin-right: 50rem; */
        /* margin-left: 50rem; */
      }
    }
    .top {
      border: 1px solid black;
    }

    @media (min-width: 991px) {
      border: 1px solid black;
      width: 100%;
      margin-left: auto;
      display: flex;
      gap: 3rem;
      div {
        /* border: 1px solid black; */
        img {
          height: 500px;
        }
      }
    }
  }
`
