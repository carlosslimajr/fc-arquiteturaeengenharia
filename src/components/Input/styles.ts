// import { inputStyleCSS } from 'components/commonStyles';
import styled from 'styled-components'

export const InputWrapper = styled.div`
  margin-bottom: 24px;

  label {
    font-family: Prompt;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 27px;
    margin-bottom: 12px;
    color: #982424;
  }
`
export const InputForm = styled.input`
  display: flex;
  width: 100%;
  height: 64px;
  border: 1px solid #ced4da;
  box-sizing: border-box;
  padding: 24px;
`

export const InputError = styled.span`
  display: block;
  font-size: 12px;
  color: ${(props) => props.theme.colors.error};
`
