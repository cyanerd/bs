import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  gap: 12px;
  align-items: center;
`;

export const Input = styled.input`
  flex: 1;
  background: transparent;
  color: #ffffff;
  border: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  padding: 12px;
  outline: none;
  transition: background 0.2s ease;

  &::placeholder {
    color: rgba(255, 255, 255, 0.6);
  }

  &:focus {
    background: rgba(255, 255, 255, 0.3);
  }
`;

export const ApplyButton = styled.button`
  background: #333;
  color: #ffffff;
  border: none;
  padding: 10px 16px;
  text-transform: uppercase;
  cursor: pointer;

  &:hover {
    background: #282828;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
