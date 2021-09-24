import styled from 'styled-components'

export const HeaderWrapper = styled.header`
  width: 100%;
  height: 120px;
  display: flex;
  justify-content: space-between;

  div.icon-menu {
    height: 4rem;
    width: 4rem;
    border-radius: 1.4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-size: 3rem;
    color: #2d4c71;
  }

  .sideBar {
    position: fixed;
    overflow-y: auto;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 999;
    background-color: #faf6ed;
  }

  .sideBar {
    padding: 5.1rem;

    & > div.top {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 7rem;
    }

    & > div.navigation > a.gradient-box {
      position: relative;

      width: 90%;
      height: 6.6rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: auto;
      border: double 1.5px transparent;
      border-radius: 14px;
      background-origin: border-box;
      background-clip: content-box, border-box;
      text-decoration: none;

      font-family: Prompt;
      font-style: normal;
      font-weight: normal;
      font-size: 18px;
      line-height: 24px;

      text-align: right;

      color: #982424;

      & > p {
        font-weight: 500;
        font-size: 2rem;
        background-image: linear-gradient(to left, #4b3f91, #a31462);
        -webkit-background-clip: text;
        -moz-background-clip: text;
        background-clip: text;
        color: transparent;
        border: 1px solid red;
      }
    }

    div.sider-bar-footer {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-top: 3rem;
      border-top: 3px solid rgba(75, 63, 145, 0.1);

      & > svg {
        margin-bottom: 3.6rem;
      }

      & > div.contact {
        display: flex;
        align-items: center;
        gap: 2rem;
        margin-bottom: 3.2rem;

        & > p {
          color: ${(props) => props.theme.colors.primary};
          font-weight: 500;
          font-size: 1.5rem;
        }
      }

      & > div.socials a {
        margin: 0 2.4rem;
      }
    }
  }
  .mobile {
    padding: 0px 2rem;
  }

  h5 {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
    padding: 0;
  }
  .mobilelogo {
    width: 40px;
    height: 40px;
    background-color: #982424;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .header {
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;

    nav {
      height: 60px;
      width: 65%;
    }
    ul {
      list-style-type: none;
      display: flex;
      justify-content: space-between;
      height: 100%;
      align-items: center;
      margin: 0 auto;

      li {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 15px;
        color: #4b3f91;
        margin-right: 25px;
        padding: 5px 0px;
        height: 40px;
        line-height: 24px;
        a {
          color: #982424;

          cursor: pointer;
          transition: 0.2s;

          &:hover {
            cursor: pointer;
            color: #982424;
            font-weight: bold;
          }
        }
      }
    }
  }
`
