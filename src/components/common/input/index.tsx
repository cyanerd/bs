import React from "react";
import { Input as InputStyled } from "./styles";

type Props = {};

export const Input: React.FC<
  React.InputHTMLAttributes<HTMLInputElement> & Props
> = ({ children, ...props }) => {
  return <InputStyled {...props}>{children}</InputStyled>;
};
