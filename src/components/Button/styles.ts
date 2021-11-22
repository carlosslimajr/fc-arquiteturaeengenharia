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
  flex-shrink: 0;

  border: none;
  color: white;
  width: ${(props) => (props.width ? props.width : '250px')};
  height: ${(props) => (props.height ? props.height : '60px')};
  background-color: ${(props) =>
    props.background ? props.background : '#982424'};
  font-family: ${(props) => props.theme.font.primary};
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 21px;
  text-align: center;
  text-transform: uppercase;
  color: #ffffff;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

  transition: all 0.2s;
  /* max-width: 400px; */
  &:hover {
    transform: scale(1.05);
    border-radius: 10px;
    box-shadow: 0 0 11px rgba(33, 33, 33, 0.2);
  }
`
