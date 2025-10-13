import styled from "styled-components";

export const Wrapper = styled.section`
  width: 100%;
`;

export const Container = styled.div<{
  $border?: string;
  $background?: string;
}>`
  width: 100%;
  min-height: 120px;
  border: ${({ $border }) => $border || "1px solid rgba(255, 255, 255, 0.1)"};
  border-radius: 1rem;
  background: ${({ $background }) => $background || "#1a1a1a"};
  padding: 1rem;
`;
