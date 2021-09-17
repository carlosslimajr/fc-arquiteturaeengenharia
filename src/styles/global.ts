import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  html, body, #__next {
    height: 100%;
  }

  body {
    font-weight: 400;
    font-size: 1.6rem;
    min-height: 100vh;
    font-family: 'Prompt','Courier New', Courier, monospace;

  }


  img {
    display: block;
  }

  ul {
    list-style: none;
  }

  a,
  a:link,
  a:visited {
    text-decoration: none;
    color: ${(props) => props.theme.colors.primaryLight};

    :hover {
      text-decoration: none;
      color: ${(props) => props.theme.colors.primary};
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

  @media(max-width:991px){
    background: url('land.jpg'),rgba(215, 181, 109, 0.12);
    background-repeat: no-repeat;

  background-size: cover;
  opacity: 0.25;
  }
}



`

export default GlobalStyles
