import styled from "styled-components";

export const FaqWrapper = styled.div`
  width: 100%;
  padding: 1rem;
`;

export const FaqHeader = styled.h3`
  width: 100%;
  text-align: center;
  margin-top: 0;
`;

export const FaqList = styled.div`
  width: 100%;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
`;

export const FaqItem = styled.div`
  width: 100%;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
`;

export const FaqQuestion = styled.button<{
  $open?: boolean;
}>`
  width: 100%;
  background: transparent;
  color: #eee;
  border: 0;
  padding: 1rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: left;
  cursor: pointer;
  font-size: 1.125rem;
  line-height: 1.4;

  &:hover {
    color: var(--primary-color);
  }
`;

export const FaqChevron = styled.span<{
  $open?: boolean;
}>`
  display: inline-flex;
  width: 28px;
  height: 28px;
  border-radius: 9999px;
  align-items: center;
  justify-content: center;
  border: 1px solid color-mix(in srgb, var(--primary-color) 60%, transparent);
  background: color-mix(in srgb, var(--primary-color) 10%, transparent);
  transition: transform 200ms ease-in-out, background 200ms ease-in-out,
    border-color 200ms ease-in-out;
  transform: rotate(${({ $open }) => ($open ? 90 : 0)}deg);
  flex-shrink: 0;
`;

export const FaqAnswer = styled.div<{
  $open?: boolean;
}>`
  color: #bbb;
  font-size: 0.95rem;
  max-height: ${({ $open }) => ($open ? "600px" : "0px")};
  overflow: hidden;
  transition: max-height 250ms ease-in-out, opacity 200ms ease-in-out,
    padding 200ms ease-in-out;
  opacity: ${({ $open }) => ($open ? 1 : 0)};
  padding: ${({ $open }) => ($open ? "0 0 1rem 0" : "0")};
`;
