import React from "react";

import { Description, ListItem, List, Title, Wrapper } from "./styles";
import { Partners, KEY_PARTNERS } from "@/components/partners";

export const Hero = () => {
  return (
    <Wrapper>
      <Title>Block Stranding</Title>
      <Description>
        The first fully onchain MMORPG, logging every action in real time.
        <br />
        Built to scale into an open world and push the limits of onchain gaming.
      </Description>
      <Description>
        <List>
          <ListItem>Powered by breakthrough Solana tech</ListItem>
          <ListItem>Pioneer of a new paradigm in Web3</ListItem>
          <ListItem>Colosseum Hackathon Winner</ListItem>
          <ListItem>40k+ players, 150 TPS, 7k content creators</ListItem>
          <ListItem>Live on the Solana dApp Store</ListItem>
        </List>
      </Description>
      <Partners
        items={KEY_PARTNERS}
        subtitle="Key partners:"
        noWrap
        align="center"
      />
    </Wrapper>
  );
};
