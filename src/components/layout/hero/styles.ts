import styled from "styled-components";

export const Wrapper = styled.section`
  width: 100%;
  max-width: var(--container-width);
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Title = styled.h1`
  width: 100%;
  text-align: center;
  font-size: 2.25rem;
  font-weight: 700;
  margin-bottom: 1rem;
`;

export const Description = styled.div`
  width: 100%;
  margin: 0 auto;
  text-align: center;
  font-size: 1.125rem;
`;

export const List = styled.ul`
  text-align: left;
  display: inline-grid;
  grid-template-columns: 1fr 1fr;
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

export const ListItem = styled.li`
  margin: 0 1rem;
`;
