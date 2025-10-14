import styled from "styled-components";

export const FormRoot = styled.form`
  width: 100%;
`;

export const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

export const StatCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StatValue = styled.span`
  font-size: 1.5rem;
  color: var(--accent-color);
`;

export const SectionTitle = styled.h4`
  margin-top: 2rem;
`;

export const Separator = styled.hr`
  margin: 3rem 0;
`;

export const DepositCard = styled.div`
  border: 1px solid #333;
  padding: 1rem 3rem;
  display: inline-flex;
  gap: 1rem;
  align-items: center;
  border-radius: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
    width: 100%;
    padding: 2rem;
  }
`;

export const AmountLabel = styled.span`
  text-align: left;
  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const AmountRow = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 12rem;
  padding: 1rem 0;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const ConstraintsList = styled.ul`
  display: inline-block;
  text-align: left;
  margin: 2rem 0;
`;
