import styled from "styled-components";

export const Wrapper = styled.main`
  width: 100%;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

export const Content = styled.div`
  min-height: 120px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  padding: 0.75rem;
`;

export const Sidebar = styled.aside`
  min-height: 120px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  padding: 0.75rem;
`;
