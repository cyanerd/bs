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
  padding: 0.75rem;
  z-index: 2;
  margin-top: -0.375rem;
  display: flex;
  flex-direction: column;
  gap: 6px;
  pointer-events: all;
`;

Dropdown.Item = styled.div`
  background: #2a2a2a;
  position: relative;
  padding: 0.25rem 0.625rem;
  color: #ccc;
  font-size: 0.875rem;
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
  padding: 0.625rem 2rem;
  text-align: center;
  pointer-events: all;
  background: var(--primary-color);
  text-transform: uppercase;
  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }
`;
