import styled from 'styled-components';

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
    padding: 20px;
    box-sizing: border-box;
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
    padding: 24px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);

    @media (max-width: 480px) {
        padding: 16px;
    }
`;

export const ModalTitle = styled.h2`
    margin: 0;
    color: #ffffff;
    font-size: 20px;
    font-weight: 600;
`;

export const CloseButton = styled.button`
    background: none;
    border: none;
    color: #888;
    font-size: 20px;
    cursor: pointer;
    padding: 4px;
    border-radius: 4px;
    transition: all 0.2s ease;

    &:hover {
        color: #ffffff;
        background: rgba(255, 255, 255, 0.1);
    }
`;

export const ModalContent = styled.div`
    padding: 24px;

    @media (max-width: 480px) {
        padding: 16px;
    }
`;

export const WalletSection = styled.div`
    margin-bottom: 24px;

    &:last-child {
        margin-bottom: 0;
    }
`;

export const SectionTitle = styled.h3`
    margin: 0 0 16px 0;
    color: #ffffff;
    font-size: 16px;
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
    padding: 12px 16px;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 12px;
    cursor: pointer;
    transition: all 0.2s ease;
    text-align: left;
    color: #ffffff;
    font-size: 14px;
    gap: 12px;
    opacity: ${props => props.$notDetected ? 0.6 : 1};

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
        padding: 10px 12px;
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
    font-size: 12px;
    padding: 4px 8px;
    border-radius: 6px;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    background: ${props => props.$installed
            ? 'rgba(34, 197, 94, 0.2)'
            : 'rgba(156, 163, 175, 0.2)'
    };
    color: ${props => props.$installed ? '#22c55e' : '#9ca3af'};
    border: 1px solid ${props => props.$installed
            ? 'rgba(34, 197, 94, 0.3)'
            : 'rgba(156, 163, 175, 0.3)'
    };
`;

export const NoWallets = styled.div`
    text-align: center;
    padding: 32px 16px;
    color: #888;

    p {
        margin: 0;
        font-size: 14px;
    }
`;

