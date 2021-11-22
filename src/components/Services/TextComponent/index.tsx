import React from 'react'
interface TextProps {
  subtitle?: string
  text?: string
}

const TextComponent: React.FC<TextProps> = ({ subtitle, text }) => {
  return (
    <>
      <h4>{subtitle}</h4>
      <p>{text}</p>
    </>
  )
}

export default TextComponent
