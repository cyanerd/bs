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
  noWrap?: boolean;
  align?: "center" | "start" | "end";
};

export const Partners = ({
  items,
  title,
  subtitle,
  noBorder,
  noWrap,
  align,
}: Props) => {
  return (
    <>
      {title && <Title style={{ marginTop: 0 }}>{title}</Title>}

      <PartnersStyled $noBorder={noBorder} $noWrap={noWrap} $align={align}>
        {subtitle && (
          <Row
            style={{
              width: "100%",
            }}
          >
            <span style={{ textTransform: "uppercase", whiteSpace: "nowrap" }}>
              {subtitle}
            </span>
          </Row>
        )}

        {items.map((item, index) => (
          <Row key={index}>
            {item.href ? (
              <Link href={item.href} target="_blank" rel="noopener noreferrer">
                <img
                  src={item.imageSrc}
                  alt={item.name}
                  height={56}
                  style={{ borderRadius: 4 }}
                />
                <LinkBadge>View on X</LinkBadge>
              </Link>
            ) : (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                  justifyContent: "center",
                  textAlign: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src={item.imageSrc}
                  alt={item.name}
                  height={56}
                  style={{ borderRadius: 4 }}
                />
                <ItemName>{item.name}</ItemName>
              </div>
            )}
          </Row>
        ))}
      </PartnersStyled>
    </>
  );
};
