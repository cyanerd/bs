import styled from "styled-components";

export const Partners = styled.div<{
  $noBorder?: boolean;
  $noWrap?: boolean;
  $align?: "center" | "start" | "end";
}>`
  display: flex;
  flex-wrap: ${({ $noWrap }) => ($noWrap ? "nowrap" : "wrap")};
  gap: ${({ $noBorder }) => ($noBorder ? "3rem" : "2rem")};
  padding: 2rem;
  border-top: ${({ $noBorder }) => ($noBorder ? "none" : "1px solid #333")};
  border-bottom: ${({ $noBorder }) => ($noBorder ? "none" : "1px solid #333")};
  align-items: ${({ $align }) => $align || "start"};
  justify-content: center;

  @media (max-width: 1024px) {
    gap: 2rem;
    flex-wrap: wrap;
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
  width: 12%;
  @media (max-width: 768px) {
    width: 24%;
  }
  @media (max-width: 480px) {
    width: 42%;
  }
`;

export const Link = styled.a`
  display: flex;
  flex-direction: column;
  gap: 12px;
  justify-content: center;
  text-align: center;
  align-items: center;
  text-decoration: none;
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
  color: #999;
  max-height: 2rem;
`;
