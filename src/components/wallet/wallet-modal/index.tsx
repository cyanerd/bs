import type { WalletName } from '@solana/wallet-adapter-base';
import { useWallet } from '@solana/wallet-adapter-react';
import React, { useEffect } from 'react';
import { toast } from 'react-toastify';

import {
  CloseButton,
  Modal,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  ModalTitle,
  NoWallets,
  SectionTitle,
  WalletName as StyledWalletName,
  WalletIcon,
  WalletItem,
  WalletList,
  WalletSection,
  WalletStatus,
} from './styles';

type Props = {
  onClose: () => void;
}

export const WalletModal: React.FC<Props> = ({ onClose }) => {
  const { wallets, connected, select, disconnect } = useWallet();

  const isAndroid = /Android/i.test(navigator.userAgent);

  const availableWallets = wallets.filter((wallet) => wallet.readyState === 'Installed' || wallet.readyState === 'Loadable');
  const otherWallets = wallets.filter((wallet) => wallet.readyState === 'NotDetected');

  const changeWallet = async (walletName: WalletName) => {
    try {
      select(walletName);
    } catch (error) {
      // toast.error(`Unable to select wallet\n${(error as Error).message}`, {
      toast.error(`Unable to select wallet`, {
        autoClose: 10000,
      });
    }
  };

  const handleWalletClick = async (walletName: WalletName) => {
    await disconnect();
    select(null);

    onClose();

    if (isAndroid) {
      // Android bug
      // Need to wait the next tick to clear previous wallet
      setTimeout(() => {
        changeWallet(walletName);
      });
    } else {
      changeWallet(walletName);
    }
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    disconnect();
    select(null);
  }, []);

  return (
    <ModalOverlay onClick={handleOverlayClick}>
      <Modal>
        <ModalHeader>
          <ModalTitle>Connect a wallet</ModalTitle>
          <CloseButton onClick={onClose}>
            ✕
          </CloseButton>
        </ModalHeader>

        <ModalContent>
          {availableWallets.length > 0 && (
            <WalletSection>
              <SectionTitle>Available Wallets</SectionTitle>
              <WalletList>
                {availableWallets.map((wallet) => (
                  <WalletItem
                    key={wallet.adapter.name}
                    onClick={() => handleWalletClick(wallet.adapter.name)}
                    disabled={connected && wallet.adapter.name === wallets.find(w => w.adapter.connected)?.adapter.name}
                  >
                    <WalletIcon
                      src={wallet.adapter.icon}
                      alt={wallet.adapter.name}
                    />
                    <StyledWalletName>{wallet.adapter.name}</StyledWalletName>
                    {wallet.readyState === 'Installed' && (
                      <WalletStatus $installed>Installed</WalletStatus>
                    )}
                  </WalletItem>
                ))}
              </WalletList>
            </WalletSection>
          )}

          {otherWallets.length > 0 && (
            <WalletSection>
              <SectionTitle>Other Wallets</SectionTitle>
              <WalletList>
                {otherWallets.map((wallet) => (
                  <WalletItem
                    key={wallet.adapter.name}
                    $notDetected
                    onClick={() => handleWalletClick(wallet.adapter.name)}
                  >
                    <WalletIcon
                      src={wallet.adapter.icon}
                      alt={wallet.adapter.name}
                    />
                    <StyledWalletName>{wallet.adapter.name}</StyledWalletName>
                    <WalletStatus>Not Detected</WalletStatus>
                  </WalletItem>
                ))}
              </WalletList>
            </WalletSection>
          )}

          {availableWallets.length === 0 && otherWallets.length === 0 && (
            <NoWallets>
              <p>No wallets found. Please install a Solana wallet extension.</p>
            </NoWallets>
          )}
        </ModalContent>
      </Modal>
    </ModalOverlay>
  );
};
