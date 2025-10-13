import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  gap: 1rem;
  align-items: center;
  @media (max-width: 480px) {
    flex-direction: column;
    align-items: stretch;
  }
`;
