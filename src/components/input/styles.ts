import styled from "styled-components";

export const Input = styled.input`
  width: 100%;
  background: transparent;
  color: #ffffff;
  border: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  padding: 0.85rem;
  font-size: 1.25rem;
  outline: none;
  transition: background 0.2s ease;

  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  &::placeholder {
    color: rgba(255, 255, 255, 0.6);
  }

  &:focus {
    background: rgba(255, 255, 255, 0.3);
  }

  &[type="number"] {
    -moz-appearance: textfield;

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }
`;
