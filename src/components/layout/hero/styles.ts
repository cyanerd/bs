import styled from "styled-components";

export const Wrapper = styled.section`
  width: 100%;
  max-width: var(--container-width);
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const Title = styled.h1`
  width: 100%;
  text-align: center;
  font-size: 2.25rem;
  font-weight: 700;
  margin-bottom: 0;
`;

export const Description = styled.p`
  width: 70%;
  margin: 0 auto;
  text-align: center;
  opacity: 0.85;
  font-size: 1.125rem;
`;

export const Partners = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  padding: 1rem 0 1rem 2rem;
  border-top: 1px solid #333;
  border-bottom: 1px solid #333;
  align-items: center;
  justify-content: center;
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
  color: #999;
  text-decoration: underline;
  &:hover {
    opacity: 0.7;
    text-decoration: none;
  }
`;
