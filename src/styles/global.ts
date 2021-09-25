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

  input, textarea, select {

  border-radius: 6px;
  transition: all 0.2s;

  &:active,
  &:focus {
    border: 1px solid #FF7433;
    outline: none;
    box-shadow: 0 3px 5px #FF743320;
  }
}


  .background {

  width: 100%;
  height: 600px;
    background: rgba(215, 181, 109, 0.12);

  z-index: -1;
  position: absolute;

  @media(max-width:991px){
    /* background: url('land.webp'); */
    background-repeat: no-repeat;
  background-size: cover;
  opacity: 8%;
  }
}
.background2{
  width: 100%;
  height: 600px;
  z-index: -1;
  position: absolute;
  @media(max-width:991px){
    background: rgba(215, 181, 109, 0.12);
    background-repeat: no-repeat;
  background-size: cover;

  }
}


.container{
    @media (max-width: 576px) {
    width: 95%;
    margin: 0 auto;
  }
}


`

export default GlobalStyles
