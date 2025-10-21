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
