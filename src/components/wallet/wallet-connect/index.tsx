import { useWallet } from "@solana/wallet-adapter-react";
import React, { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";

import { WalletModal } from "../wallet-modal";

import { Container, Copied, Dropdown, Icon, Wrapper } from "./styles";

// @ts-ignore
import { Web3 } from "@/utils/web3";
import { Button } from "@/components/common/button";
import { formatPrice } from "@/utils/format";

type Props = {
  requiresSignature: boolean;
  signatureEnabled?: boolean;
  onConnect: (publicKey: string) => Promise<void>;
  walletBalance?: number | null;
};

export const WalletConnect: React.FC<Props> = ({
  requiresSignature,
  signatureEnabled = true,
  onConnect,
  walletBalance,
}) => {
  const { connected, disconnect, wallet, publicKey, signMessage } = useWallet();

  const [dropdownActive, setDropdownActive] = useState(false);
  const [copied, setCopied] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [manualSign, setManualSign] = useState(false);

  const refDropdown = useRef<HTMLDivElement>(null);
  const refTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const publicKey58 = publicKey?.toBase58() ?? "";
  const icon = wallet?.adapter.icon;
  const isAndroid = /Android/i.test(navigator.userAgent);
  const willSign = requiresSignature && signatureEnabled;

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
    if (
      refDropdown.current &&
      !refDropdown.current.contains(event.target as Node)
    ) {
      setDropdownActive(false);
    }
  };

  const signWallet = async () => {
    if (!willSign || !signMessage || !publicKey) {
      return;
    }

    try {
      const success = await Web3.signVerify(publicKey, signMessage);
      if (!success) {
        throw new Error("Failed verifying");
      }

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
      if (willSign) {
        // Sign when both UI and behavior should sign
        if (isAndroid) {
          setManualSign(true);
        } else {
          signWallet().then(() => onConnect(publicKey58));
        }
      } else {
        // Skip signing and just connect
        onConnect(publicKey58);
        setManualSign(false);
      }
    } else {
      setManualSign(false);
    }
  }, [publicKey58, willSign]);

  useEffect(() => {
    if (!dropdownActive) {
      return;
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownActive]);

  return (
    <Wrapper>
      {modalVisible && <WalletModal onClose={() => setModalVisible(false)} />}
      <Container>
        <Wrapper style={{ width: '250px', margin: '0 auto' }}>
          <Button
            onClick={handleClickWallet}
            $minWidth="250px"
            $maxWidth="250px"
          >
            {connected ? (
              <>
                <Icon src={icon} />
                <span>
                  {publicKey58.slice(0, 4)}...
                  {publicKey58.slice(-4)}
                </span>
              </>
            ) : (
              "Connect wallet"
            )}
          </Button>
          {connected && walletBalance !== null && walletBalance !== undefined && (
            <div style={{
              textAlign: 'center',
              marginTop: '4px',
              fontSize: '12px',
              color: '#999',
            }}>
              Balance: {formatPrice(walletBalance, 4)} SOL
            </div>
          )}
          {dropdownActive && (
            <Dropdown ref={refDropdown}>
              <Dropdown.Item onClick={handleClickCopy}>
                Copy address
                {copied && <Copied src="./images/success.svg" />}
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

        {willSign && manualSign && (
          <Button onClick={() => signWallet()}>Sign wallet</Button>
        )}
      </Container>
    </Wrapper>
  );
};
