import styled from "styled-components";

export const SidebarRoot = styled.div`
  text-align: left;
  padding: 0 1rem;
`;

export const SidebarHeader = styled.h3`
  margin-top: 0;
  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const Card = styled.div`
  border: 1px solid #333;
  padding: 1rem 1.5rem;
  border-radius: 1rem;
  margin-bottom: 1rem;
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  border-bottom: 1px solid #333;
  padding-bottom: 1rem;
`;

export const HeaderText = styled.p`
  flex: 1;
  margin: 0;
`;

export const HeaderValue = styled.p`
  color: var(--accent-color);
  margin: 0;
`;

export const List = styled.ul`
  padding: 0;
  list-style: none;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const RowText = styled.p`
  flex: 1;
  text-align: left;
  margin: 0;
`;

export const RowValue = styled.p`
  text-align: right;
  margin: 0;
`;
