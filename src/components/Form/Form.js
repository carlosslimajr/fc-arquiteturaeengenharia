import React from 'react';
import { FormCustom } from './FormStyles';

const Form = ({ children, ...props }) => {
  return <FormCustom {...props}>{children}</FormCustom>;
};

export default Form;
