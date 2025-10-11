import React from "react";

import { Content, Grid, Sidebar, Wrapper } from "./styles";

type Props = {
  content?: React.ReactNode;
  sidebar?: React.ReactNode;
  className?: string;
};

export const Main: React.FC<Props> = ({ content, sidebar, className }) => {
  return (
    <Wrapper className={className}>
      <Grid>
        <Content>{content}</Content>
        <Sidebar>{sidebar}</Sidebar>
      </Grid>
    </Wrapper>
  );
};

