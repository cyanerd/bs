import React from "react";

import { Grid, Item, Wrapper } from "./styles";

type Props = {
  children?: React.ReactNode[] | React.ReactNode;
  className?: string;
};

export const Partners: React.FC<Props> = ({ children, className }) => {
  const nodes = Array.isArray(children) ? children : [children];
  return (
    <Wrapper className={className}>
      <Grid>
        {nodes.filter(Boolean).map((node, index) => (
          <Item key={index}>{node}</Item>
        ))}
      </Grid>
    </Wrapper>
  );
};
