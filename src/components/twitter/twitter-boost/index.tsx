import React from "react";
import { Container, Content, Title, Subtitle, Note } from "./styles";
import { TwitterConnect } from "../twitter-connect";

export const TwitterBoost = ({
  name,
  onConnect,
}: {
  name: string;
  onConnect: () => void;
}) => {
  return (
    <Container>
      <Content>
        <Title>Boost your bag up to 20%! *</Title>
        <Subtitle>
          Connect your X account and tweet a shoutout to the presale
        </Subtitle>
        <Note>
          * Your final boost size is calculated based on your X engagement,
          content uniqueness, smart follower reach, and other factors.
        </Note>
      </Content>

      <TwitterConnect name={name} onConnect={onConnect} />
    </Container>
  );
};
