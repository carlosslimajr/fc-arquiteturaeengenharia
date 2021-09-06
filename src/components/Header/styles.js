import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  width: 100%;
  height: 120px;
  display: flex;
  justify-content: space-between;

  h5 {
    display: flex;
    align-items: center;
    justify-content: center;
    /* width: 150px; */
    margin: 0;
    padding: 0;
  }

  .header {
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;

    nav {
      height: 60px;
      /* border: 1px solid black; */
      width: 100%;
    }
    ul {
      list-style-type: none;
      display: flex;
      justify-content: space-between;
      height: 100%;
      /* justify-content: center; */
      align-items: center;
      /* border: 1px solid blue; */
      margin: 0 auto;
      width: 85%;

      li {
        /* border: 1px solid black; */
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 15px;
        color: #4b3f91;
        margin-right: 25px;
        padding: 5px 0px;
        height: 40px;
        line-height: 24px;
        color: #982424;
        &:hover {
          cursor: pointer;
          color: #982424;
        }
      }
    }
  }
`;
