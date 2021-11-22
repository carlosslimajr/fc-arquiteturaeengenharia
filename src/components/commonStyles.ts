import styled from 'styled-components'

export const Title = styled.h2`
  font-family: ${(props) => props.theme.font.primary};
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 54px;
  color: #982424;

  @media (max-width: 991px) {
    font-family: ${(props) => props.theme.font.primary};
    font-style: normal;
    font-weight: bold;
    font-size: 32px;
    line-height: 36px;
    text-align: center;
    color: #982424;
  }
`

export const Subtitle = styled.p`
  font-family: ${(props) => props.theme.font.primary};
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 27px;
  text-align: center;
  color: #34344f;
`

interface ColoredProps {
  width?: string
  height?: string
}
export const ColoredBlock = styled.div<ColoredProps>`
  background: #faf6ed;
  width: ${(props) => (props.width ? props.width : '')};
  height: ${(props) => (props.height ? props.height : '')};
`
