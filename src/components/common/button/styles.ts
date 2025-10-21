import { styled } from "styled-components";

export const Button = styled.button<{
  $background?: string;
  $color?: string;
  $width?: string;
  $size?: "small" | "medium";
  $minWidth?: string;
  $maxWidth?: string;
}>`
  width: ${({ $width }) => $width || "auto"};
  min-width: ${({ $minWidth }) => $minWidth || "auto"};
  max-width: ${({ $maxWidth }) => $maxWidth || "auto"};
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;
  color: ${({ $color }) => $color || "#000"};
  font-size: ${({ $size }) => ($size === "small" ? "0.875rem" : "1rem")};
  letter-spacing: 1px;
  padding: ${({ $size }) => ($size === "small" ? "0.5rem 1rem" : "1rem 2rem")};
  text-align: center;
  pointer-events: all;
  background: ${({ $background }) => $background || "var(--primary-color)"};
  text-transform: uppercase;
  border: none;
  border-radius: 0;
  cursor: pointer;

  @media (max-width: 768px) {
    max-width: 100%;
  }

  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }

  // &:disabled {
  //   opacity: 0.5;
  //   cursor: not-allowed;
  // }
`;
