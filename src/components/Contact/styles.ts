import styled from 'styled-components'

export const ContactWrapper = styled.div`
  background-image: url('contact-background.png'),
    linear-gradient(269.99deg, #d7b56d 0.01%, #982424 99.99%);

  height: 320px;

  @media (max-width: 991px) {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 468px;
  }
  .content {
    display: grid;
    position: relative;
    grid-template-columns: 40% 55%;

    @media (max-width: 991px) {
      display: flex;
      justify-content: center;
      align-items: center;
      grid-template-columns: 1fr;

      button {
        margin: 0 auto;
      }
      p {
        margin: 2rem 0;
      }
    }

    aside {
      margin-top: 30px;
    }
    .imagecontainer {
      position: absolute;
      left: 50px;
      top: -101px;
      width: 350px;
      height: auto;
    }
    h3 {
      font-family: ${(props) => props.theme.font.primary};
      font-style: normal;
      font-weight: bold;
      font-size: 32px;
      line-height: 36px;
      color: #ffffff;
      @media (min-width: 991px) {
        margin-top: 2.5rem;
      }
    }
    p {
      font-family: ${(props) => props.theme.font.primary};
      font-style: normal;
      font-weight: 600;
      font-size: 18px;
      line-height: 27px;
      color: #ffffff;
    }
    button {
      background: #ffffff;
      color: rgba(152, 36, 36, 1);
    }
  }
`
