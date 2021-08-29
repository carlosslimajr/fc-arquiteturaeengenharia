import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  width: 100%;
  /* background-color: ${props => props.theme.colors.text_6}; */
  padding: 25px;
  /* height: 80px; */
  /* height: 120px; */
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  color: white;
  /* border: 1px solid blue; */

  h5 {
    /* border: 1px solid white; */
    color: #F0CEB8;
    font-size: 30px;
    height: 40px;
  }
  button{
    height: 40px;
    border: none;
    border-radius: 8px;
    font-size: 12px;
    padding: 0px 20px;
    background: #DDD0B3;
    /* color */
  }
  z-index: 10;
`;
