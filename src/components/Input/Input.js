import React from 'react';
import { InputForm, InputError } from './InputStyles';

const Input = ({
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
    <>
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
    </>
  );
};

export default Input;
