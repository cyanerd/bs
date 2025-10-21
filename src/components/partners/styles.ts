import styled from "styled-components";

export const Partners = styled.div<{ $noBorder?: boolean }>`
  display: flex;
  flex-wrap: wrap;
  gap: 3rem;
  padding: 2rem;
  border-top: ${({ $noBorder }) => ($noBorder ? "none" : "1px solid #333")};
  border-bottom: ${({ $noBorder }) => ($noBorder ? "none" : "1px solid #333")};
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    gap: 2rem;
  }
`;

export const Title = styled.h3`
  text-align: center;
  margin-bottom: 1rem;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Link = styled.a`
  display: flex;
  flex-direction: column;
  gap: 12px;
  justify-content: center;
  text-align: center;
  align-items: center;
  text-decoration: none;
  &:hover {
    opacity: 0.7;
  }
`;

export const LinkBadge = styled.span`
  background: #292929;
  padding: 0.1rem 0.55rem;
  font-size: 0.875rem;
  color: #eee;
  text-transform: none;
  white-space: nowrap;
`;

export const ItemName = styled.span`
  font-size: 0.875rem;
  color: #eee;
  text-transform: none;
  white-space: nowrap;
  color: #999;
`;
