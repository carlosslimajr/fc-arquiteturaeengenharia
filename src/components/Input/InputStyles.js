// import { inputStyleCSS } from 'components/commonStyles';
import styled from 'styled-components';

export const InputForm = styled.input`
  /* ${inputStyleCSS} */
`;

export const InputError = styled.span`
  display: block;
  font-size: 12px;
  color: ${props => props.theme.colors.error};
`;
