import React from "react";
import { Button as ButtonStyled } from "./styles";
import { toast } from "react-toastify";

type Props = {
  disabledText?: string;
  $background?: string;
  $color?: string;
  $width?: string;
  $size?: "small" | "medium";
};

export const Button: React.FC<
  React.ButtonHTMLAttributes<HTMLButtonElement> & Props
> = ({ children, type, disabled, disabledText, onClick, ...props }) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (disabled) {
      toast.error(disabledText || "Button is disabled");
      e.preventDefault();
      return;
    }
    onClick?.(e);
  };

  return (
    <ButtonStyled
      type={type ?? "button"}
      onClick={handleClick}
      {...props}
      aria-disabled={disabled}
    >
      {children}
    </ButtonStyled>
  );
};
