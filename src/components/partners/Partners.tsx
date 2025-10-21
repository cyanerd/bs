import React from "react";
import {
  ItemName,
  Link,
  LinkBadge,
  Partners as PartnersStyled,
  Row,
  Title,
} from "./styles";
import { PartnerItem } from "./types";

type Props = {
  items: PartnerItem[];
  title?: string;
  subtitle?: string;
  noBorder?: boolean;
};

export const Partners = ({ items, title, subtitle, noBorder }: Props) => {
  return (
    <>
      {title && <Title>{title}</Title>}

      <PartnersStyled $noBorder={noBorder}>
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
              {item.href ? (
                <LinkBadge>View on X</LinkBadge>
              ) : (
                <ItemName>{item.name}</ItemName>
              )}
            </Link>
          </Row>
        ))}
      </PartnersStyled>
    </>
  );
};
