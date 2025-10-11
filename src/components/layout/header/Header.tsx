import React from "react";

import { Container, End, Start, Wrapper } from "./styles";

type Props = {
  start?: React.ReactNode;
  end?: React.ReactNode;
  className?: string;
};

export const Header: React.FC<Props> = ({ start, end, className }) => {
  return (
    <Wrapper className={className}>
      <Container>
        <Start>{start}</Start>
        <End>{end}</End>
      </Container>
    </Wrapper>
  );
};
