import React from "react";
import { Button as ButtonStyled } from "./styles";

type Props = {
  $background?: string;
  $color?: string;
  $width?: string;
  $size?: "small" | "medium";
};

export const Button: React.FC<
  React.ButtonHTMLAttributes<HTMLButtonElement> & Props
> = ({ children, ...props }) => {
  return <ButtonStyled {...props}>{children}</ButtonStyled>;
};
