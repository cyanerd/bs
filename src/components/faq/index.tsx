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
    q: "What is Block Stranding?",
    a: "Block Stranding is the first fully onchain MMORPG running in real time on Solana. It scales into massive worlds and logs every player action instantly with zero fees. The project is built to push the limits of onchain gaming and pioneer a new paradigm in Web3.",
  },
  {
    q: "What makes Block Stranding unique?",
    a: "Block Stranding is among the first projects to use breakthrough Solana technology to solve the latency challenge in onchain gaming. More than a game, Block Stranding is designed as a live showcase of what next-gen onchain experiences can look like today. Its world serves as a testbed for experimenting with instant onchain verification of real-time actions and scaling them to thousands of parallel sessions.",
  },
  {
    q: "What is $STRAND?",
    a: "$STRAND is the core utility token that powers rewards and in-game mechanics. It’s used to acquire items, unlock upgrades, and take part in player-driven events and economies. As the ecosystem grows, $STRAND will become the backbone of cross-world onchain interactions.",
  },
  {
    q: "What is Token Boost?",
    a: "Token Boost is a system that grants you extra free tokens in addition to your purchased allocation. Each boost can be earned by meeting specific conditions.",
  },
  {
    q: "Do the presale tokens have vesting? ",
    a: "No, there is no vesting for presale participants. All tokens will be 100% unlocked at TGE.",
  },
  {
    q: "How long will the presale last?",
    a: "The presale will run for 48 hours.",
  },
  {
    q: "What is the maximum ticket size per participant?",
    a: "The maximum allocation per participant is 200 SOL.",
  },
  {
    q: "Who is eligible to participate in the presale?",
    a: "Eligibility is based on whitelists, partner allocations, and onchain criteria defined by the team.",
  },
  {
    q: "How many tokens are being sold?",
    a: "A total of 10% of the supply will be sold during the presale.",
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
    <FaqWrapper style={{ paddingTop: 0 }}>
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
