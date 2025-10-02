import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
`;

export const Section = styled.div<{
  $align?: "center" | "start" | "end";
  $direction?: "row" | "column";
  $gap?: number;
}>`
  display: flex;
  align-items: ${({ $align }) => $align || "start"};
  flex-direction: ${({ $direction }) => $direction || "row"};
  gap: ${({ $gap }) => $gap || 0}px;
`;

export const Title = styled.h3<{
  $size?: number;
}>`
  font-size: ${({ $size }) => $size || 16}px;
  font-weight: bold;
`;

export const Status = styled.div<{
  $connected?: boolean;
}>`
  text-transform: uppercase;
  font-size: 12px;
  padding: 4px 8px;
  border-radius: 6px;
  background: ${({ $connected }) => $connected ? "#61c11d" : "#e53b3b"};
  color: ${({ $connected }) => $connected ? "#fff" : "#fff"};
  border: 1px solid ${({ $connected }) => $connected ? "#61c11d" : "#e53b3b"};
  font-weight: bold;
  letter-spacing: 0.5px;
  text-align: center;
`;