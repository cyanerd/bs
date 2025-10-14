import React from "react";

import {
  Description,
  Partners,
  Link,
  Row,
  Title,
  Wrapper,
  LinkBadge,
} from "./styles";

type PartnerItem = {
  name: string;
  href: string;
  imageSrc: string;
};

const partners: PartnerItem[] = [
  {
    name: "Play Solana",
    href: "#",
    imageSrc: "/images/partners/Play-Solana.jpg",
  },
  {
    name: "Solana Mobile",
    href: "#",
    imageSrc: "/images/partners/Solana-Mobile.jpg",
  },
  {
    name: "Magic Block",
    href: "#",
    imageSrc: "/images/partners/Magic-Block.jpg",
  },
  {
    name: "Magic Eden",
    href: "#",
    imageSrc: "/images/partners/Magic-Eden.jpg",
  },
  {
    name: "Phantom",
    href: "#",
    imageSrc: "/images/partners/Phantom.jpg",
  },
  {
    name: "Solflare",
    href: "#",
    imageSrc: "/images/partners/Solflare.jpg",
  },
];

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
      {
        <Partners>
          <Row>
            <span style={{ textTransform: "uppercase" }}>Key partners:</span>
          </Row>
          {partners.map((partner, index) => (
            <Row key={index}>
              <Link
                href={partner.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={partner.imageSrc}
                  alt={partner.name}
                  height={56}
                  style={{ borderRadius: 4 }}
                />
                <LinkBadge>View on X</LinkBadge>
              </Link>
            </Row>
          ))}
        </Partners>
      }
    </Wrapper>
  );
};
