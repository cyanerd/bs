import styled from "styled-components";

export const Input = styled.input`
  flex: 1;
  background: transparent;
  color: #ffffff;
  border: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  padding: 0.75rem;
  font-size: 1rem;
  outline: none;
  transition: background 0.2s ease;

  &::placeholder {
    color: rgba(255, 255, 255, 0.6);
  }

  &:focus {
    background: rgba(255, 255, 255, 0.3);
  }
`;
