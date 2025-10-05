import styled from "styled-components";

export const Container = styled.div<{ $visible?: boolean }>`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  visibility: ${({ $visible }) => ($visible ? "visible" : "hidden")};
`;

export const Item = styled.div`
  text-align: center;
`;

export const Value = styled.span`
  font-weight: 400;
`;
