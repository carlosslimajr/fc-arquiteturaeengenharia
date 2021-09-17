import styled from 'styled-components'

export const CostumersWrapper = styled.div`
  .upSide {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    /* border: 1px solid black; */
    text-align: center;
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
      /* border: 1px solid blue; */
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        /* width: 10px; */
        /* border: 1px solid blue; */
        /* max-width: 100%; */
        margin-left: 10px;
        height: auto;
      }
    }
    img {
      /* border: 1px solid black; */
      /* width: 200px; */
      /* margin-bottom: 20px; */
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
