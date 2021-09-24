import styled from 'styled-components'

export const CostumersWrapper = styled.div`
  @media (max-width: 992px) {
    margin-top: 8rem !important;
  }
  .upSide {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    text-align: center;
    @media (max-width: 992px) {
      margin: 0 auto;
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
    .logo {
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        margin-left: 10px;
        height: auto;
      }
    }

    grid-gap: 25px;
    margin-top: 20px;
    span {
      width: 130px;
      height: 50px;
      border: 1px solid black;
    }
  }
`
