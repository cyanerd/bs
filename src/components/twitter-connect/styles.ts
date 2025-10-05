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
  font-family: "PixelText";
  font-size: 18px;
  letter-spacing: 1px;
  padding: 18px 38px 20px 38px;
  text-align: center;
  pointer-events: all;
  background: #333;
  border: none;
  border-bottom: 6px solid #000;
  &:hover {
    background: #222;
    cursor: pointer;
  }
`;
