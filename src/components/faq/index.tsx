import React, { useState } from "react";
import {
  FaqWrapper,
  FaqHeader,
  FaqList,
  FaqItem,
  FaqQuestion,
  FaqChevron,
  FaqAnswer,
} from "./styles";

type QA = { q: string; a: string };

const data: QA[] = [
  {
    q: "What is Play Solana?",
    a: "Play Solana is the fastest-growing Web3 gaming ecosystem on Solana. It unites prime hardware, flagship games, branded IP, DeFi, and more into a SuperHUB where gamers can play, build, live, and earn.",
  },
  {
    q: "What is the PlaySolana SuperHUB?",
    a: "The SuperHUB is an aggregation of products, content, and community that make it easy for gamers to discover, play, and earn across the Solana ecosystem.",
  },
  {
    q: "What is PlaySolana Gen1 (PSG1)?",
    a: "PSG1 is an early community collection offering access, rewards, and participation benefits in the ecosystem.",
  },
  {
    q: "What are <Player1> and <Player2> NFTs?",
    a: "They are themed membership NFTs within the ecosystem that unlock perks, roles, and cosmetics. Names are placeholders for the collection archetypes.",
  },
  {
    q: "What is $PLAY?",
    a: "$PLAY is the core utility token that powers rewards, fees, and upgrades across experiences.",
  },
  {
    q: "Who is eligible for the Metaplex Genesis Community Pre-sale?",
    a: "Eligibility is determined by allowlists, partnerships, and on-chain criteria announced by the team.",
  },
  {
    q: "What is the utility of $PLAY?",
    a: "Utility includes marketplace fees, in-game upgrades, governance-aligned actions, and ecosystem rewards.",
  },
  {
    q: "How will I claim the $PLAY allocation from the Community Pre-sale?",
    a: "Claims will be available via the official portal after the token generation event. You will connect your wallet and follow the on-screen steps.",
  },
];

export const FAQ: React.FC = () => {
  const [openSet, setOpenSet] = useState<Set<number>>(new Set([0]));

  const toggle = (index: number) => {
    setOpenSet((prev) => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  };

  return (
    <FaqWrapper>
      <FaqHeader>FAQ</FaqHeader>
      <FaqList>
        {data.map((item, index) => {
          const isOpen = openSet.has(index);
          return (
            <FaqItem key={index}>
              <FaqQuestion onClick={() => toggle(index)} $open={isOpen}>
                <span>{item.q}</span>
                <FaqChevron $open={isOpen} aria-hidden>
                  {/* chevron icon */}
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 6l6 6-6 6"
                      stroke="var(--primary-color)"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </FaqChevron>
              </FaqQuestion>
              <FaqAnswer $open={isOpen}>{item.a}</FaqAnswer>
            </FaqItem>
          );
        })}
      </FaqList>
    </FaqWrapper>
  );
};
