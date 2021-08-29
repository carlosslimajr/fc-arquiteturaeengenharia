import React from "react";
import { ButtonForm } from "./ButtonStyles";

const Button = ({ children, ...props }) => {
  return <ButtonForm {...props}>{children} </ButtonForm>;
};

export default Button;
