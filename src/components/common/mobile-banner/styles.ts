import styled from "styled-components";

export const MobileBannerContainer = styled.div`
  width: 100%;
  background-color: #f4c430;
  padding: 12px 16px;
  text-align: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;

  /* Only show on mobile devices */
  @media (min-width: 768px) {
    display: none;
  }

  /* Only show on coarse pointer devices (touch screens) */
  @media (pointer: fine) {
    display: none;
  }
`;

export const MobileBannerText = styled.div`
  color: #000;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.4;
`;
