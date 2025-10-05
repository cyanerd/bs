import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  width: 80%;
  max-width: 468px;
  margin: 0 auto;
  border: 1px solid rgba(255, 255, 255, 0.3);
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
  padding: 16px;
`;

export const Title = styled.h3<{
  $size?: number;
}>`
  font-size: ${({ $size }) => $size || 24}px;
  font-weight: bold;
  margin: 0;
  text-align: center;
`;

export const Status = styled.div<{
  $connected?: boolean;
}>`
  text-transform: uppercase;
  font-size: 12px;
  padding: 4px 8px;
  border-radius: 6px;
  background: ${({ $connected }) => ($connected ? "#61c11d" : "#e53b3b")};
  color: ${({ $connected }) => ($connected ? "#fff" : "#fff")};
  border: 1px solid ${({ $connected }) => ($connected ? "#61c11d" : "#e53b3b")};
  letter-spacing: 0.5px;
  text-align: center;
`;
