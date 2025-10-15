import styled from "styled-components";

export const FormRoot = styled.form`
  width: 100%;
`;

export const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
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
  padding: 1rem 2.5rem;
  display: inline-flex;
  gap: 1rem;
  align-items: center;
  border-radius: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
    padding: 1.5rem 2.5rem;
    margin: 0 1rem;
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
  width: 10rem;
  padding: 0.55rem 0;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const ConstraintsList = styled.ul`
  display: inline-block;
  text-align: left;
  margin: 2rem 0;
`;

// Agree checkbox block
export const AgreeContainer = styled.div`
  display: flex;
  gap: 1rem;
  padding: 2rem 0 3rem;
  align-items: center;
  justify-content: center;
  text-align: left;
  margin: 0 2rem;
`;

export const AgreeCheckbox = styled.input.attrs({ type: "checkbox" })`
  flex-shrink: 0;
`;

export const AgreeLabel = styled.label``;

export const AgreeLink = styled.a``;
