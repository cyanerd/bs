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
  link: string;
  position?: CardPosition;
};

const tweets: Tweet[] = [
  {
    name: "0xShyron",
    handle: "@0xShyron",
    text: '"Just played @blockstranding to fresh up my mind after coming from the exam. Literally, it\'s giving me vibes of Minecraft + Among Us"',
    link: "https://x.com/0xShyron/status/1958857226036064569",
    position: { topPercent: 10, leftPercent: 3, rotateDeg: -8, zIndex: 10 },
    avatar: '/images/avatars/0xShyron.jpg'
  },
  {
    avatar: '/images/avatars/Hoss.jpg',
    name: "Hoss",
    handle: "@HOSS_ibc",
    text: '"Not a gamer these day since life\'s too busy... but @blockstranding has me hooked!"',
    link: "https://x.com/HOSS_ibc/status/1974147988722495943",
    position: { topPercent: 25, leftPercent: 35, rotateDeg: 4, zIndex: 20 },
  },
  {
    avatar: '/images/avatars/Tyler.jpg',
    name: "Tyler",
    handle: "@TylerDurden",
    text: '"Crypto Twitter 2.0 will exist in one of these online one day."',
    link: "https://x.com/TylerDurden/status/1934804659484676123",
    position: { topPercent: 0, rightPercent: 6, rotateDeg: 12, zIndex: 10 },
  },
  {
    avatar: '/images/avatars/MagicBlock.jpg',
    name: "MagicBlock",
    handle: "@magicblock",
    text: '"Real-time multiplayer gaming, fully onchain. Huge shoutout to @blockstranding for pushing the limits"',
    link: "https://x.com/magicblock/status/1934600842050474392",
    position: {
      bottomPercent: 25,
      leftPercent: 15,
      rotateDeg: -12,
      zIndex: 30,
    },
  },
  {
    avatar: '/images/avatars/JonasHahn.jpg',
    name: "Jonas Hahn",
    handle: "@SolPlay_jonas",
    text: '"This is crazy, im actually playing a Solana on chain RPG O.O"',
    link: "https://x.com/SolPlay_jonas/status/1932739996521517162",
    position: { bottomPercent: 20, rightPercent: 18, rotateDeg: 6, zIndex: 20 },
  },
  {
    avatar: '/images/avatars/xcryptobroeth.jpg',
    name: "xcryptobro.eth",
    handle: "@xCryptoBro",
    text: '"I get some nostalgic vibes whenever I start playing @blockstranding.Throw back to my Minecraft days."',
    link: "https://x.com/xCryptoBro/status/1964521046788473184",
    position: {
      bottomPercent: 0,
      rightPercent: 20,
      rotateDeg: -15,
      zIndex: 10,
    },
  },
  {
    avatar: '/images/avatars/SKYLINE.jpg',
    name: "SKYLINE",
    handle: "@SkylineETH",
    text: '"Crazy how far onchain gaming has come. @blockstranding is the one of the biggest experimental game project."',
    link: "https://x.com/SkylineETH/status/1955726834085048394",
    position: { topPercent: 12, leftPercent: 55, rotateDeg: -3, zIndex: 25 },
  },
  {
    avatar: '/images/avatars/SolanaSensei.jpg',
    name: "Solana Sensei",
    handle: "@SolanaSensei",
    text: '"My Sensei panda made it to a Solana game that won Solana\'s Colloseum!! This is so sick @blockstranding"',
    link: "https://x.com/SolanaSensei/status/1965076565316002110",
    position: { bottomPercent: 8, leftPercent: 35, rotateDeg: 9, zIndex: 15 },
  },
  {
    avatar: '/images/avatars/TSUBASA.jpg',
    name: "TSUBASA",
    handle: "@tsubasaP2E",
    text: '"I can\'t remember the last time I pushed a leaderboard this hard"',
    link: "https://x.com/tsubasaP2E/status/1974041215726170252",
    position: { topPercent: 5, leftPercent: 38, rotateDeg: 7, zIndex: 18 },
  },
  {
    avatar: '/images/avatars/Lawrence.jpg',
    name: "Lawrence",
    handle: "@Crypto_gennie",
    text: '"At this point, it is safe to say I\'m addicted to playing @blockstranding"',
    link: "https://x.com/Crypto_gennie/status/1976103391958008089",
    position: { topPercent: 6, leftPercent: 70, rotateDeg: -6, zIndex: 14 },
  },
  {
    avatar: '/images/avatars/andyMagicBlock.jpg',
    name: "andy | MagicBlock",
    handle: "@fauxfire_",
    text: '"the velocity that the block stranding guys ship is CRAZY"',
    link: "https://x.com/fauxfire_/status/1959296323305210003",
    position: { bottomPercent: 6, leftPercent: 6, rotateDeg: 6, zIndex: 12 },
  },
  {
    avatar: '/images/avatars/Dogacan.jpg',
    name: "Dogacan",
    handle: "@0xdogacan",
    text: '"I\'ve been playing @blockstranding a lot lately. I completely lose track of time while playing."',
    link: "https://x.com/0xdogacan/status/1968666284695888342",
    position: { bottomPercent: 28, leftPercent: 42, rotateDeg: -7, zIndex: 22 },
  },
  {
    avatar: '/images/avatars/Wolfgang.jpg',
    name: "Wolfgang",
    handle: "@iwillbeok37",
    text: '"Whenever I get bored on the weekend, I open @blockstranding and instantly relax."',
    link: "https://x.com/iwillbeok37/status/1977445189569634659",
    position: { topPercent: 0, leftPercent: 16, rotateDeg: -4, zIndex: 26 },
  },
  {
    avatar: '/images/avatars/Alvin.jpg',
    name: "Alvin",
    handle: "@7_Tolani",
    text: '"staying up tonight to complete my game missions on @blockstranding. one of the best web3 games I\'ve ever played."',
    link: "https://x.com/7_Tolani/status/1964080600106635484",
    position: { bottomPercent: 3, leftPercent: 25, rotateDeg: 5, zIndex: 16 },
  },
  {
    avatar: '/images/avatars/Explorer.jpg',
    name: "Explorer",
    handle: "@wtfAaron",
    text: '"I love how @blockstranding delivers a fantastic gaming experience that brings back childhood memories."',
    link: "https://x.com/wtfAaron/status/1976168777025978828",
    position: { bottomPercent: 15, leftPercent: 50, rotateDeg: -10, zIndex: 19 },
  },
  {
    avatar: '/images/avatars/0x27eth.jpg',
    name: "0x27.eth",
    handle: "@0x27eth",
    text: '"All i can see is Magic @blockstranding and @magicblock are real cook"',
    link: "https://x.com/0x27eth/status/1974837635534217651",
    position: { topPercent: 18, rightPercent: 4, rotateDeg: 8, zIndex: 17 },
  },
  {
    avatar: '/images/avatars/DefiedPiper.jpg',
    name: "Defied Piper",
    handle: "@DefiedPiper",
    text: '"@blockstranding so smooth it makes me feel like im playing an old school zelda game until i realize i have no stam while in the middle of 20 monster thugs"',
    link: "https://x.com/DefiedPiper/status/1945770339130286213",
    position: { bottomPercent: 5, rightPercent: 4, rotateDeg: -5, zIndex: 13 },
  },
  {
    avatar: '/images/avatars/yellowpanther黄豹💎.jpg',
    name: "yellowpanther 黄豹 💎",
    handle: "@yellowpantherx",
    text: '"solana has mmorpg WHAT"',
    link: "https://x.com/yellowpantherx/status/1935961824845009151",
    position: { topPercent: 3, leftPercent: 25, rotateDeg: 10, zIndex: 21 },
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
                src={tweet.avatar}
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
