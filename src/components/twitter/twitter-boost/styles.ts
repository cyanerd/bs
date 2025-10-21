import styled from "styled-components";
import { Flexbox } from "@/components/common/flexbox";

export const Container = styled(Flexbox)`
  gap: 2rem;
  flex-direction: row;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Title = styled.h3`
  margin: 0 0 0.5rem 0;
`;

export const Subtitle = styled.span`
  font-size: 1.25rem;
`;

export const Note = styled.span`
  font-size: 0.875rem;
  color: #999;
`;
