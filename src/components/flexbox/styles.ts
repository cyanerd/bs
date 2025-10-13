import styled from "styled-components";

export const Flexbox = styled.div<{
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
