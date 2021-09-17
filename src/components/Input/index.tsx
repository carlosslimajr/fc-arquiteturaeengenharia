import React from 'react'
import { InputForm, InputError, InputWrapper } from './styles'

interface InputProps {
  id?: string
  label?: string
  value?: string
  type?: string
  onChange?: () => void
  error?: string
  onBlur?: () => void
  placeholder?: string
  setValue?: string
}

const Input: React.FC<any> = ({
  id,
  label,
  value,
  type,
  onChange,
  error,
  onBlur,
  placeholder,
  setValue,
  ...props
}) => {
  return (
    <InputWrapper>
      <div>
        <label htmlFor={id}>{label}</label>
        <InputForm
          type={type}
          id={id}
          name={id}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
          setValue={setValue}
          {...props}
        />
        {error && <InputError>{error}</InputError>}
      </div>
    </InputWrapper>
  )
}

export default Input
