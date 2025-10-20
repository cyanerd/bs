import styled from "styled-components";

export const Wrapper = styled.main`
  width: 100%;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2rem;
  text-align: center;
  @media (max-width: 1280px) {
    grid-template-columns: 1fr;
  }
`;

export const Content = styled.div`
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 1rem;
  border-radius: 1rem;
  background: #1a1a1a;
`;

export const Sidebar = styled.aside`
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 1rem;
  border-radius: 1rem;
  background: #1a1a1a;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
