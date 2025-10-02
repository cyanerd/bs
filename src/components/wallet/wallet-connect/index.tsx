import { useWallet } from '@solana/wallet-adapter-react';
import React, { useEffect, useRef, useState } from 'react';
import { toast } from 'react-toastify';

import { WalletModal } from '../wallet-modal';

import { Container, Copied, Dropdown, Icon, Wrapper } from './styles';

// @ts-ignore
import type { WalletReceiveData } from '~features/client/mixed/ui/content/start-game/content/wallet/types';
import { Web3 } from '@/utils/web3';
import { Button } from '@/components/button';

type Props = {
  sign: boolean
  onConnect: (publicKey: string) => Promise<void>;
};

export const WalletConnect: React.FC<Props> = ({ sign, onConnect }) => {
  const { connected, disconnect, wallet, publicKey, signMessage } = useWallet();

  const [dropdownActive, setDropdownActive] = useState(false);
  const [copied, setCopied] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [manualSign, setManualSign] = useState(false);

  const refDropdown = useRef<HTMLDivElement>(null);
  const refTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const publicKey58 = publicKey?.toBase58() ?? '';
  const icon = wallet?.adapter.icon;
  const isAndroid = /Android/i.test(navigator.userAgent);

  const handleClickWallet = () => {
    if (connected) {
      setDropdownActive(!dropdownActive);
    } else {
      setModalVisible(true);
    }
  };

  const handleClickChange = () => {
    setModalVisible(true);
    setDropdownActive(false);
  };

  const handleClickCopy = () => {
    if (!publicKey) {
      return;
    }

    navigator.clipboard.writeText(publicKey.toBase58());

    if (refTimeout.current) {
      clearTimeout(refTimeout.current);
    }

    setCopied(true);
    refTimeout.current = setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  const handleClickDisconnect = () => {
    disconnect();
    setDropdownActive(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (refDropdown.current && !refDropdown.current.contains(event.target as Node)) {
      setDropdownActive(false);
    }
  };

  const signWallet = async () => {
    if (!signMessage || !publicKey) {
      return;
    }

    try {
      const success = await Web3.signVerify(publicKey, signMessage);
      if (!success) {
        throw new Error("Failed verifying");
      }

      await onConnect(publicKey.toString());

      setManualSign(false);
    } catch (error) {
      disconnect();

      toast.error(`Unable to sign wallet\n${(error as Error).message}`, {
        autoClose: 5000,
      });
    }
  };

  useEffect(() => {
    if (!connected) {
      setDropdownActive(false);
    }
  }, [connected]);

  useEffect(() => {
    if (publicKey58) {
      if (isAndroid) {
        setManualSign(true);
      } else {
        signWallet();
      }
    } else {
      setManualSign(false);
    }
  }, [publicKey58]);

  useEffect(() => {
    if (!dropdownActive) {
      return;
    }

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownActive]);

  return (
    <Wrapper>
      {modalVisible && (
        <WalletModal
          onClose={() => setModalVisible(false)}
        />
      )}
      <Container>
        <Button onClick={handleClickWallet}>
          {connected ? (
            <>
              <Icon src={icon} />
              <span>
                {publicKey58.slice(0, 4)}...{publicKey58.slice(-4)}
              </span>
            </>
          ) : (
            'Connect wallet'
          )}
        </Button>
        {(sign && manualSign) && (
          <Button onClick={() => signWallet()}>
            Sign wallet
          </Button>
        )}
      </Container>
      {dropdownActive && (
        <Dropdown ref={refDropdown}>
          <Dropdown.Item onClick={handleClickCopy}>
            Copy address
            {copied && (
              <Copied src='./images/success.svg' />
            )}
          </Dropdown.Item>
          <Dropdown.Item onClick={handleClickChange}>
            Change wallet
          </Dropdown.Item>
          <Dropdown.Item onClick={handleClickDisconnect}>
            Disconnect
          </Dropdown.Item>
        </Dropdown>
      )}
    </Wrapper>
  );
};
