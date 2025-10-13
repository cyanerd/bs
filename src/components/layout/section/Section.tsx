import React from "react";

import { Container, Wrapper } from "./styles";

type Props = {
  children?: React.ReactNode;
  className?: string;
  $border?: string;
  $background?: string;
};

export const Section: React.FC<Props> = ({
  children,
  className,
  $border,
  $background,
}) => {
  return (
    <Wrapper className={className}>
      <Container $border={$border} $background={$background}>
        {children}
      </Container>
    </Wrapper>
  );
};
