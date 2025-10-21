import styled from "styled-components";

export const HintRoot = styled.div`
  display: inline-block;
  vertical-align: middle;
  margin-left: 0.5rem;
  position: relative;
`;

export const IconButton = styled.button`
  all: unset;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  cursor: pointer;
  color: currentColor;
  opacity: 0.75;
  line-height: 0;
  -webkit-tap-highlight-color: transparent;
  touch-action: manipulation;

  &:hover {
    opacity: 1;
  }

  @media (pointer: coarse) {
    width: 40px;
    height: 40px;
  }
`;

export const Tooltip = styled.div<{ $visible: boolean }>`
  width: 164px;
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%) translateY(-4px);
  background: #444;
  color: #fff;
  padding: 0 1rem;
  z-index: 1000;
  font-size: 0.875rem;
  border-radius: 0.25rem;

  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transition: opacity 0.2s ease, transform 0.2s ease, visibility 0s linear 0.2s;

  ${({ $visible }) =>
    $visible &&
    `
      opacity: 1;
      visibility: visible;
      pointer-events: auto;
      transform: translateX(-50%) translateY(0);
      transition: opacity 0.2s ease, transform 0.2s ease;
    `}
`;
