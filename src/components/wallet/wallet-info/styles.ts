import styled from "styled-components";

export const Container = styled.div<{ $visible?: boolean }>`
  width: 100%;
  flex-direction: column;
  gap: 10px;
  display: ${({ $visible }) => ($visible ? "flex" : "none")};
`;

export const Item = styled.div`
  text-align: center;
`;

export const Value = styled.span`
  font-weight: 400;
`;
