import { inputStyleCSS } from 'components/commonStyles';
import styled from 'styled-components';

export const FormCustom = styled.form`
  width: ${props => (props.width ? props.width : '650px')};
  height: ${props => (props.height ? props.height : '')};
  overflow-y: ${props => (props.overY ? props.overY : '')};

  padding: 40px 50px;
  padding: ${props => (props.padding ? props.padding : '')};
  border-radius: 16px;

  display: flex;
  flex-direction: column;

  background: ${props => props.theme.colors.backgroundForm};

  img {
    width: 100px;
    /* margin-bottom: 20px; */
  }

  h1 {
    font-size: 32px;
    margin: 32px 0;
    color: ${props => props.theme.colors.primary};
  }

  h2 {
    font-size: 20px;
    font-weight: 600;
    margin: 32px 0;
  }

  .input-block {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    max-width: ${props => (props.maxWidth ? props.maxWidth : '')};

    label {
      font-weight: 500;
      font-size: 16px;
      margin-bottom: 10px;
    }

    input {
      ${inputStyleCSS}
      width: 100%;
    }

    .label-link {
      display: flex;
      align-items: center;
      justify-content: space-between;

      a {
        margin-bottom: 10px;
        color: ${props => props.theme.colors.text_5};
        font-weight: 500;
        font-size: 14px;
        text-decoration: none;
      }
    }
  }

  p {
    width: 100%;
    text-align: center;
    margin-top: 32px;

    a {
      font-weight: 600;
      color: ${props => props.theme.colors.primary};
      text-decoration: none;
    }
  }
`;
