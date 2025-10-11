import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
`;

export const Button = styled.button`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  color: #ffffff;
  font-size: 16px;
  letter-spacing: 1px;
  padding: 10px 32px;
  line-height: 1.6;
  text-align: center;
  pointer-events: all;
  background: #333;
  border: none;
  text-transform: uppercase;
  &:hover {
    background: #282828;
    cursor: pointer;
  }
`;
