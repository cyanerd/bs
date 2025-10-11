import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const Icon = styled.img`
  width: 18px;
`;

export const Dropdown: any = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: #222;
  padding: 12px;
  z-index: 2;
  margin-top: -6px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  pointer-events: all;
`;

Dropdown.Item = styled.div`
  background: #2a2a2a;
  position: relative;
  padding: 4px 10px;
  color: #ccc;
  font-size: 14px;
  &:hover {
    background: #444;
    cursor: pointer;
    color: #fff;
  }
`;

export const Copied = styled.img`
  position: absolute;
  width: 12px;
  height: 12px;
  top: 8px;
  right: 10px;
`;

export const Button = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  color: #000;
  font-size: 1rem;
  letter-spacing: 1px;
  line-height: 1.6;
  padding: 10px 32px;
  text-align: center;
  pointer-events: all;
  background: var(--primary-color);
  text-transform: uppercase;
  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }
`;
