import React from 'react'
import { ButtonWrapper } from './styles'

interface ButtonProps {
  width?: string
  background?: string
  height?: string
  color?: string
  onClick?: (e: any) => void
}

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return <ButtonWrapper {...props}>{children}</ButtonWrapper>
}

export default Button
