import styled from 'styled-components'

interface ButtonProps {
  width?: string
  background?: string
  height?: string
  color?: string
}
export const ButtonWrapper = styled.button<ButtonProps>`
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;

  border: none;
  color: white;
  /* width: 240px; */
  width: ${(props) => (props.width ? props.width : '250px')};
  height: ${(props) => (props.height ? props.height : '60px')};
  background-color: ${(props) =>
    props.background ? props.background : '#982424'};
  font-family: Prompt;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 21px;
  /* identical to box height, or 131% */

  text-align: center;
  text-transform: uppercase;

  color: #ffffff;

  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

  transition: all 0.2s;
  &:hover {
    transition: 0.2s;
    filter: brightness(0.8);
    transform: scale(1.03);
  }
`
