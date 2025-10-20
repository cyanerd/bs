import React from "react";
import { Flexbox as FlexboxStyled } from "./styles";

export const Flexbox = ({
  children,
  $align,
  $direction,
  $gap,
  $width,
  className,
  style,
}: React.PropsWithChildren<{
  $align?: "center" | "start" | "end" | "stretch" | "flex-start" | "flex-end";
  $direction?: "row" | "column";
  $gap?: number;
  $width?: string;
  className?: string;
  style?: React.CSSProperties;
}>) => {
  return (
    <FlexboxStyled
      $align={$align}
      $direction={$direction}
      $gap={$gap}
      $width={$width}
      className={className}
      style={style}
    >
      {children}
    </FlexboxStyled>
  );
};

export default Flexbox;
