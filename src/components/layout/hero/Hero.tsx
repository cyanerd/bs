import React from "react";

import { Description, Partners, Link, Row, Title, Wrapper } from "./styles";

type PartnerItem = {
  name: string;
  href: string;
  imageSrc: string;
};

type Props = {
  title?: React.ReactNode;
  description?: React.ReactNode;
  partners?: PartnerItem[];
  className?: string;
};

export const Hero: React.FC<Props> = ({
  title,
  description,
  partners: partnerItems,
  className,
}) => {
  return (
    <Wrapper className={className}>
      <Title>{title}</Title>
      <Description>{description}</Description>
      {partnerItems && partnerItems.length > 0 && (
        <Partners>
          <Row>
            <span style={{ textTransform: "uppercase" }}>Key partners:</span>
          </Row>
          {partnerItems.map((partner, index) => (
            <Row key={index}>
              <Link
                href={partner.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={partner.imageSrc}
                  alt={partner.name}
                  height={40}
                  style={{ borderRadius: 8 }}
                />
                [link]
              </Link>
            </Row>
          ))}
        </Partners>
      )}
    </Wrapper>
  );
};
