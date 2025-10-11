import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  min-height: 96vh;
  padding: 2vh 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const Section = styled.div<{
  $align?: "center" | "start" | "end" | "stretch" | "flex-start" | "flex-end";
  $direction?: "row" | "column";
  $gap?: number;
  $width?: string;
}>`
  width: ${({ $width }) => $width || "100%"};
  display: flex;
  align-items: ${({ $align }) =>
    $align === "start"
      ? "flex-start"
      : $align === "end"
      ? "flex-end"
      : $align || "stretch"};
  flex-direction: ${({ $direction }) => $direction || "row"};
  gap: ${({ $gap }) => $gap || 0}px;
  padding: 1rem;
`;

export const Status = styled.div<{
  $connected?: boolean;
}>`
  text-transform: uppercase;
  font-size: 0.75rem;
  padding: 0.25rem 0.5rem;
  border-radius: 0.5rem;
  background: ${({ $connected }) => ($connected ? "#61c11d" : "#e53b3b")};
  color: ${({ $connected }) => ($connected ? "#fff" : "#fff")};
  border: 1px solid ${({ $connected }) => ($connected ? "#61c11d" : "#e53b3b")};
  letter-spacing: 0.5px;
  text-align: center;
`;
