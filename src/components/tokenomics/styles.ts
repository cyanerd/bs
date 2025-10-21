import styled from "styled-components";

export const Wrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  align-items: center;
  justify-content: center;
  padding: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const DonutSvg = styled.svg`
  width: 320px;
  height: 320px;
  display: block;
  margin: 0 auto;
  max-width: 100%;
`;

export const Legend = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 0.75rem;
`;

export const LegendItem = styled.li<{ $active?: boolean }>`
  display: grid;
  grid-template-columns: 1.25rem auto;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
  background: #121212;
  border: 1px solid #222;
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  transition: box-shadow 160ms ease, border-color 160ms ease;
  box-shadow: ${({ $active }) =>
    $active ? "0 0 12px 0px var(--primary-color)" : "none"};

  .label {
    color: ${({ $active }) => ($active ? "var(--primary-color)" : "#e5ffee")};
    transition: color 160ms ease;
  }
  .sub {
    color: #999;
    font-size: 0.9rem;
    margin-top: 0.125rem;
  }
`;

export const Swatch = styled.span`
  width: 1rem;
  height: 1rem;
  display: inline-block;
`;

// Single donut slice as an SVG circle, animatable on hover/active
export const DonutSlice = styled.path<{ $active: boolean }>`
  transform-origin: center;
  transition: transform 160ms ease;
  cursor: pointer;
  /* Softer glow on active */
  filter: drop-shadow(
    0 0 ${({ $active }) => ($active ? "2px" : "0")} var(--primary-color)
  );
  transform: ${({ $active }) => ($active ? "scale(1.025)" : "scale(1)")};
`;
