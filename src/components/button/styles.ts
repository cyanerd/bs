import { styled } from "styled-components";

export const Button = styled.button`
  background-color: #000;
  color: #fff;
  padding: 0.875rem 1.5rem;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;
  text-transform: uppercase;
  font-size: 1rem;

  &:hover {
    background-color: #444;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
