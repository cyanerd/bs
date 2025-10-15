import React from "react";
import {
  AvatarImg,
  Board,
  Card,
  Handle,
  HeaderRow,
  Name,
  TweetText,
  Title,
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
    position: { topPercent: 10, leftPercent: 3, rotateDeg: -8, zIndex: 10 },
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
    position: { topPercent: 0, rightPercent: 3, rotateDeg: 12, zIndex: 10 },
  },
  {
    avatar: "D",
    name: "DAO Decentral",
    handle: "@DAODecentral",
    text: '"Finally, a project that delivers on its promises. Excited for Block Stranding."',
    position: {
      bottomPercent: 25,
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
    position: {
      bottomPercent: 10,
      rightPercent: 25,
      rotateDeg: -15,
      zIndex: 10,
    },
  },
  {
    avatar: "G",
    name: "GameGuru",
    handle: "@GameGuru",
    text: '"Been testing the alpha—smooth gameplay and instant finality on Solana."',
    position: { topPercent: 12, leftPercent: 55, rotateDeg: -3, zIndex: 25 },
  },
  {
    avatar: "H",
    name: "HODLHarper",
    handle: "@HODLHarper",
    text: '"NFT utility that actually matters. Stoked for launch."',
    position: { bottomPercent: 8, leftPercent: 35, rotateDeg: 9, zIndex: 15 },
  },
  {
    avatar: "I",
    name: "IndexerIvy",
    handle: "@IndexerIvy",
    text: '"On-chain metrics are trending up; this drop has momentum."',
    position: { topPercent: 5, leftPercent: 32, rotateDeg: 7, zIndex: 18 },
  },
  {
    avatar: "J",
    name: "JupiterJack",
    handle: "@JupiterJack",
    text: '"Liquidity is deep and the vibes are deeper. Bookmarked this one."',
    position: { topPercent: 6, leftPercent: 70, rotateDeg: -6, zIndex: 14 },
  },
  {
    avatar: "K",
    name: "KernelK",
    handle: "@KernelKrypto",
    text: '"Clean contracts, clean launch plan. Devs clearly know what they’re doing."',
    position: { bottomPercent: 6, leftPercent: 6, rotateDeg: 6, zIndex: 12 },
  },
  {
    avatar: "L",
    name: "LayerLlama",
    handle: "@LayerLlama",
    text: '"UI slaps and txs are instant. This is how web3 gaming should feel."',
    position: { bottomPercent: 28, leftPercent: 42, rotateDeg: -7, zIndex: 22 },
  },
  {
    avatar: "M",
    name: "MetaMason",
    handle: "@MetaMason",
    text: '"Left side looks stacked. Tossing a like—this launch feels different."',
    position: { topPercent: 0, leftPercent: 16, rotateDeg: -4, zIndex: 26 },
  },
];

export const TwitterSays = () => {
  return (
    <>
      <Title>X Says</Title>
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
    </>
  );
};
