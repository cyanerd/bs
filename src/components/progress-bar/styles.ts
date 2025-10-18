import styled, { keyframes } from "styled-components";

const stripe = keyframes`
  0% { background-position: 0 0; }
  100% { background-position: 40px 0; }
`;

export const BarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Bar = styled.div`
  position: relative;
  width: 100%;
  height: 2rem;
  border-radius: 0.65rem;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.08);
  overflow: hidden;
`;

export const Fill = styled.div<{ $value: number }>`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: ${({ $value }) => Math.min(Math.max($value, 0), 100)}%;
  background-color: var(--primary-color);
  background-image: linear-gradient(
    135deg,
    rgba(0, 0, 0, 0.12) 25%,
    rgba(0, 0, 0, 0) 25%,
    rgba(0, 0, 0, 0) 50%,
    rgba(0, 0, 0, 0.12) 50%,
    rgba(0, 0, 0, 0.12) 75%,
    rgba(0, 0, 0, 0) 75%,
    rgba(0, 0, 0, 0) 100%
  );
  background-size: 20px 20px;
`;

export const InBarText = styled.div`
  position: absolute;
  left: 0.75rem;
  bottom: 0.2rem;
  z-index: 1;
  color: #000;
  font-size: 0.9rem;
`;

export const BottomRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.25rem;
  color: #bbb;
  font-size: 1rem;
`;
