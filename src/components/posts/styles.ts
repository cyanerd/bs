import styled from "styled-components";

export type CardPosition = {
  topPercent?: number;
  bottomPercent?: number;
  leftPercent?: number;
  rightPercent?: number;
  rotateDeg?: number;
  zIndex?: number;
};

export const Board = styled.div`
  padding: 1rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  @media (min-width: 768px) {
    position: relative; /* md:relative */
    min-height: 550px; /* md:min-h-[550px] */
    display: block; /* disable flex for absolute children */
  }
`;

export const Card = styled.div<{ $position?: CardPosition }>`
  background: #111;
  border: 1px solid #2a2a2a;
  border-radius: 0.5rem;
  padding: 1rem; /* p-4 */

  width: 100%;

  box-shadow: 0 2px 8px color-mix(in srgb, var(--primary-color) 5%, transparent);
  transition: transform 300ms ease-in-out, box-shadow 300ms ease-in-out;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 20px
      color-mix(in srgb, var(--primary-color) 15%, transparent);
    z-index: 50; /* hover:z-50 */
  }

  @media (min-width: 768px) {
    width: 16rem; /* md:w-64 */
    position: absolute; /* md:absolute */
    z-index: ${({ $position }) => $position?.zIndex || 1};

    top: ${({ $position }) =>
      $position?.topPercent !== undefined
        ? `${$position.topPercent}%`
        : "auto"};
    bottom: ${({ $position }) =>
      $position?.bottomPercent !== undefined
        ? `${$position.bottomPercent}%`
        : "auto"};
    left: ${({ $position }) =>
      $position?.leftPercent !== undefined
        ? `${$position.leftPercent}%`
        : "auto"};
    right: ${({ $position }) =>
      $position?.rightPercent !== undefined
        ? `${$position.rightPercent}%`
        : "auto"};
    transform: ${({ $position }) =>
      `rotate(${($position?.rotateDeg ?? 0).toString()}deg)`};
  }
`;

export const HeaderRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem; /* space-x-3 */
  margin-bottom: 0.75rem; /* mb-3 */
`;

export const AvatarImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 9999px; /* rounded-full */
  border: 1px solid var(--primary-color);
`;

export const Name = styled.p`
  color: #ffffff;
  font-weight: 700; /* font-bold */
  font-size: 0.875rem; /* text-sm */
`;

export const Handle = styled.p`
  color: #6b7280; /* text-gray-500 */
  font-size: 0.75rem; /* text-xs */
`;

export const TweetText = styled.p`
  color: #d1d5db; /* text-gray-300 */
  font-size: 0.875rem; /* text-sm */
`;
