import { createGlobalStyle } from 'styled-components';
import 'react-datepicker/dist/react-datepicker.css';
import img from '../assets/teste.jpg';

export default createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins','Inter', sans-serif;
}

body {
  color: ${props => props.theme.colors.text_2};
  font: 400 16px 'Inter', sans-serif;

}

input, textarea, select {
  background: ${props => props.theme.backgroundFields};
  color: ${props => props.theme.text_2};
  border-radius: 6px;
  transition: all 0.2s;

  &:active,
  &:focus {
    border: 1px solid ${props => props.theme.colors.primary};
    outline: none;
    box-shadow: 0 3px 5px ${props => `${props.theme.colors.primary}20`};
  }
}

h1, h2, h3{
  color: ${props => props.theme.colors.text_1};
}

.flex-dashboard{
  display: grid;
  grid-template-columns: 235px 1fr 0px;
  grid-gap: 40px;
  height: calc(100vh - 80px);
}

.rightboard{
  margin: 40px 0 ;
  border-radius:"6px";
}

.ReactModalPortal {
  div {
    z-index: 20;
  }
}
.background {
  /* border: 1px solid black; */
  width: 100%;
  height: 600px;
  background: rgba(215, 181, 109, 0.12);

  z-index: -1;
  position: absolute;
  filter: brightness(50%);
}
`;
