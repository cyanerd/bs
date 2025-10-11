import React from "react";

import { Container, Wrapper } from "./styles";

type Props = {
  children?: React.ReactNode;
  className?: string;
};

export const Section: React.FC<Props> = ({ children, className }) => {
  return (
    <Wrapper className={className}>
      <Container>{children}</Container>
    </Wrapper>
  );
};
