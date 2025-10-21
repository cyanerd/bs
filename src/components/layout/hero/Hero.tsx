import React from "react";

import { Description, Title, Wrapper } from "./styles";
import { Partners, KEY_PARTNERS } from "@/components/partners";

export const Hero = ({
  title,
  description,
}: {
  title?: React.ReactNode;
  description?: React.ReactNode;
}) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Partners
        items={KEY_PARTNERS}
        subtitle="Key partners:"
        noWrap
        align="center"
      />
    </Wrapper>
  );
};
