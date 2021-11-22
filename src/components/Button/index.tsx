import React from 'react'
import { ButtonWrapper } from './styles'

interface ButtonProps {
  width?: string
  background?: string
  height?: string
  color?: string
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return <ButtonWrapper {...props}>{children}</ButtonWrapper>
}

export default Button
