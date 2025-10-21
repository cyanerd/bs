import styled from "styled-components";

export const HintRoot = styled.div`
  display: inline-block;
  vertical-align: middle;
  margin-left: 0.5rem;
  position: relative;
  top: 2px;
`;

export const IconButton = styled.button`
  all: unset;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  cursor: pointer;
  color: currentColor;
  opacity: 0.75;

  &:hover {
    opacity: 1;
  }
`;

export const Tooltip = styled.div<{ $visible: boolean }>`
  width: 164px;
  position: absolute;
  top: 100%;
  left: -50%;
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
