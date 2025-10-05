import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
`;

export const Container = styled.div<{ $hidden?: boolean }>`
  display: flex;
  gap: 6px;
  visibility: ${(props) => (props.$hidden ? "hidden" : "visible")};
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
  padding: 12px;
  z-index: 2;
  margin-top: -6px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  pointer-events: all;
`;

Dropdown.Item = styled.div`
  background: #2a2a2a;
  position: relative;
  padding: 4px 10px;
  color: #ccc;
  font-size: 14px;
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
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  color: #283c18;
  font-family: "PixelText";
  font-weight: bold;
  font-size: 18px;
  letter-spacing: 1px;
  padding: 18px 38px 20px 38px;
  text-align: center;
  pointer-events: all;
  background: #bbf68e;
  border-bottom: 6px solid #385520;
  &:hover {
    background: #a1ec67;
    cursor: pointer;
  }
`;
