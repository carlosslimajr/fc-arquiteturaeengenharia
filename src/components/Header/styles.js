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
    width: 150px;
  }

  .header {
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;


    nav{
      height: 60px;
    }
    ul {
      list-style-type: none;
      display: flex;
      justify-content: space-between;
      height: 100%;
      justify-content: center;
      align-items: center;

      li {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 15px;
        color: #4B3F91;
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
