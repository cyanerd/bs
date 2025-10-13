import React from "react";
import {
  AvatarImg,
  Board,
  Card,
  Handle,
  HeaderRow,
  Name,
  TweetText,
  type CardPosition,
} from "./styles";

// Data for the influencer tweet cards. This makes it easy to add, remove, or change tweets.
type Tweet = {
  avatar: string;
  name: string;
  handle: string;
  text: string;
  position?: CardPosition;
};

const tweets: Tweet[] = [
  {
    avatar: "A",
    name: "AlexCrypto",
    handle: "@AlexCryptoLive",
    text: '"On-chain gaming is the future, period. This is big!"',
    position: { topPercent: 10, leftPercent: 5, rotateDeg: -8, zIndex: 10 },
  },
  {
    avatar: "B",
    name: "BlockchainBella",
    handle: "@BellaBlockchain",
    text: '"The transparency Block Stranding brings is a total game-changer for players!"',
    position: { topPercent: 25, leftPercent: 35, rotateDeg: 4, zIndex: 20 },
  },
  {
    avatar: "C",
    name: "CryptoKing",
    handle: "@OfficialCryptoK",
    text: '"Just aped into the $STRAND presale, this project is going to be absolutely huge."',
    position: { topPercent: 5, rightPercent: 10, rotateDeg: 12, zIndex: 10 },
  },
  {
    avatar: "D",
    name: "DAO Decentral",
    handle: "@DAODecentral",
    text: '"Finally, a project that delivers on its promises. Excited for Block Stranding."',
    position: {
      bottomPercent: 15,
      leftPercent: 15,
      rotateDeg: -12,
      zIndex: 30,
    },
  },
  {
    avatar: "E",
    name: "EtherGems",
    handle: "@EtherGemsX",
    text: '"The tokenomics are incredibly solid and the community is absolutely buzzing with excitement."',
    position: { bottomPercent: 20, rightPercent: 5, rotateDeg: 6, zIndex: 20 },
  },
  {
    avatar: "F",
    name: "FutureFin",
    handle: "@FutureFinance",
    text: "\"Seriously, don't sleep on what's happening over on Solana with this new game.\"",
    position: { bottomPercent: 5, rightPercent: 35, rotateDeg: -5, zIndex: 10 },
  },
];

export const Posts = () => {
  return (
    <Board>
      {tweets.map((tweet, index) => (
        <Card key={index} $position={tweet.position}>
          <HeaderRow>
            <AvatarImg
              src={`https://placehold.co/40x40/BBF68E/1A1A1A?text=${tweet.avatar}`}
              alt={`${tweet.name}'s avatar`}
            />
            <div>
              <Name>{tweet.name}</Name>
              <Handle>{tweet.handle}</Handle>
            </div>
          </HeaderRow>
          <TweetText>{tweet.text}</TweetText>
        </Card>
      ))}
    </Board>
  );
};
