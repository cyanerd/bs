import React from "react";
import { Link, LinkBadge, Partners as PartnersStyled, Row } from "./styles";
import { PartnerItem } from "./types";

type Props = {
  items: PartnerItem[];
  subtitle?: string;
};

export const Partners = ({ items, subtitle }: Props) => {
  return (
    <PartnersStyled>
      {subtitle && (
        <Row>
          <span style={{ textTransform: "uppercase" }}>{subtitle}</span>
        </Row>
      )}

      {items.map((item, index) => (
        <Row key={index}>
          <Link href={item.href} target="_blank" rel="noopener noreferrer">
            <img
              src={item.imageSrc}
              alt={item.name}
              height={56}
              style={{ borderRadius: 4 }}
            />
            <LinkBadge>View on X</LinkBadge>
          </Link>
        </Row>
      ))}
    </PartnersStyled>
  );
};
