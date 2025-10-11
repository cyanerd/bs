import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.75);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  backdrop-filter: blur(4px);
  padding: 1.25rem;
`;

export const Modal = styled.div`
  background: #1a1a1a;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  width: 100%;
  max-width: 400px;
  max-height: calc(100vh - 40px);
  overflow-y: auto;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  pointer-events: all;

  @media (max-width: 480px) {
    width: 100%;
    max-width: calc(100vw - 40px);
    margin: 0;
  }
`;

// остальные стили остаются без изменений
export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);

  @media (max-width: 480px) {
    padding: 1rem;
  }
`;

export const ModalTitle = styled.h2`
  margin: 0;
  color: #ffffff;
  font-size: 1.25rem;
  font-weight: 600;
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  color: #888;
  font-size: 1.25rem;
  cursor: pointer;
  padding: 0.25rem;
  border-radius: 4px;
  transition: all 0.2s ease;

  &:hover {
    color: #ffffff;
    background: rgba(255, 255, 255, 0.1);
  }
`;

export const ModalContent = styled.div`
  padding: 1.5rem;

  @media (max-width: 480px) {
    padding: 1rem;
  }
`;

export const WalletSection = styled.div`
  margin-bottom: 1.5rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const SectionTitle = styled.h3`
  margin: 0 0 1rem 0;
  color: #ffffff;
  font-size: 1rem;
  font-weight: 500;
`;

export const WalletList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const WalletItem = styled.button<{ $notDetected?: boolean }>`
  display: flex;
  align-items: center;
  padding: 0.75rem 1rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.2s ease;
  text-align: left;
  color: #ffffff;
  font-size: 0.875rem;
  gap: 12px;
  opacity: ${(props) => (props.$notDetected ? 0.6 : 1)};

  &:hover {
    background: rgba(255, 255, 255, 0.08);
    border-color: rgba(100, 108, 255, 0.3);
    transform: translateY(-1px);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &:disabled:hover {
    transform: none;
    background: rgba(255, 255, 255, 0.05);
    border-color: rgba(255, 255, 255, 0.1);
  }

  @media (max-width: 480px) {
    padding: 0.625rem 0.75rem;
  }
`;

export const WalletIcon = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 6px;
  flex-shrink: 0;

  @media (max-width: 480px) {
    width: 28px;
    height: 28px;
  }
`;

export const WalletName = styled.span`
  flex-grow: 1;
  font-weight: 500;
`;

export const WalletStatus = styled.span<{ $installed?: boolean }>`
  font-size: 0.75rem;
  padding: 0.25rem 0.5rem;
  border-radius: 6px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  background: ${(props) =>
    props.$installed ? "rgba(34, 197, 94, 0.2)" : "rgba(156, 163, 175, 0.2)"};
  color: ${(props) => (props.$installed ? "#22c55e" : "#9ca3af")};
  border: 1px solid
    ${(props) =>
      props.$installed ? "rgba(34, 197, 94, 0.3)" : "rgba(156, 163, 175, 0.3)"};
`;

export const NoWallets = styled.div`
  text-align: center;
  padding: 2rem 1rem;
  color: #888;

  p {
    margin: 0;
    font-size: 0.875rem;
  }
`;
