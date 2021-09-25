import styled from 'styled-components'

export const CostumersWrapper = styled.div`
  margin-bottom: 18rem;
  @media (max-width: 992px) {
    margin-top: 8rem !important;
    margin-bottom: 8rem;
  }
  .upSide {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    text-align: center;
    margin-bottom: 2.5rem;
    @media (max-width: 992px) {
      /* margin: 0 auto; */
      h2 {
        margin: 0 auto;
        margin-bottom: 1rem;
      }
    }
  }

  .downSide {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 100px 100px;

    @media (max-width: 991px) {
      overflow-y: auto;
      height: 12rem;
      margin-bottom: 8rem;
    }

    grid-gap: 25px;
    margin-top: 20px;
    span {
      width: 130px;
      height: 50px;
      border: 1px solid black;
    }
  }

  .down {
    .react-multi-carousel-dot-list {
      margin-top: 4rem !important;
      margin-bottom: 6rem;
      position: relative;

      .react-multi-carousel-dot {
        margin-right: 24px;
        @media (max-width: 991px) {
          margin-top: -1.5rem;
        }
        button {
          background: #ced4da;
          border: none;
        }
      }
      .react-multi-carousel-dot.react-multi-carousel-dot--active {
        button {
          background: #982424;
        }
      }
    }

    @media (max-width: 991px) {
      div {
        /* border: 1px solid black; */
        img {
          /* border: 1px solid blue; */
          width: 80%;
        }
        /* margin-right: 10px; */
      }
    }

    .logo {
      display: flex;
      align-items: center;
      justify-content: center;
      /* border: 1px solid black; */
      height: 100%;
      pointer-events: none;

      img {
        margin-left: 10px;
        height: auto;
      }
    }
  }
`
