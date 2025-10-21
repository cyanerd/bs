import { getAuth } from "@/api/getAuth";
import { fetchWalletInfo, WalletInfo } from "@/api/presale";
import { useWallet } from "@solana/wallet-adapter-react";
import { useEffect, useState, useCallback } from "react";
import { toast } from "react-toastify";
import {
  setCookie,
  getCookie,
  removeCookie,
  WALLET_COOKIE_NAME,
  REFERRAL_CODE_COOKIE_NAME,
  SIGNATURE_COOKIE_NAME,
  SIGNATURE_WALLET_COOKIE_NAME
} from "@/utils/cookies";
import { centrifugeService } from "@/utils/centrifuge";

export function useUserAuth() {
  const [isWalletConnected, setWalletConnected] = useState(false);
  const [isTwitterConnected, setTwitterConnected] = useState(false);
  const [loading, setLoading] = useState(false);

  const [walletAddress, setWalletAddress] = useState("");
  const [name, setName] = useState("");
  const [walletInfo, setWalletInfo] = useState<WalletInfo | null>(null);
  const [referralCode, setReferralCode] = useState<string>(() => getCookie(REFERRAL_CODE_COOKIE_NAME) || "");

  const { connected, wallet } = useWallet();

  // Callback for updating totalDeposited from centrifuge
  const handleWalletDepositUpdate = useCallback((totalDepositedValue: number) => {
    setWalletInfo(prevInfo => prevInfo ? { ...prevInfo, totalDeposited: totalDepositedValue } : null);
  }, []);

  const auth = async () => {
    setLoading(true);

    return getAuth()
      .then((data) => {
        if (data?.valid) {
          const userData = data.userData;
          setName(userData.name || "");
          setTwitterConnected(true);
        } else if (data?.error) {
          toast.error(data.error, {
            autoClose: 10000,
          });
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const fetchWallet = async () => {
    try {
      const info = await fetchWalletInfo(wallet?.adapter.name, referralCode);
      setWalletInfo(info);
    } catch {}
  }

  const completeWalletConnect = async (publicKey: string) => {
    setWalletAddress(publicKey);
    setWalletConnected(true);
    setCookie(WALLET_COOKIE_NAME, publicKey);
    console.log('completeWalletConnect');

    // Wait for centrifuge to connect, then subscribe to wallet channel
    const subscribeToWalletWhenReady = () => {
      if (centrifugeService.isConnected) {
        console.log('Centrifuge already connected, subscribing to wallet');
        centrifugeService.subscribeToWallet(publicKey);
        centrifugeService.updateCallbacks({
          onWalletDepositUpdate: handleWalletDepositUpdate
        });
      } else {
        console.log('Waiting for centrifuge connection...');
        const checkConnection = setInterval(() => {
          if (centrifugeService.isConnected) {
            clearInterval(checkConnection);
            console.log('Centrifuge connected, now subscribing to wallet');
            centrifugeService.subscribeToWallet(publicKey);
            centrifugeService.updateCallbacks({
              onWalletDepositUpdate: handleWalletDepositUpdate
            });
          }
        }, 100); // Check every 100ms
      }
    };

    subscribeToWalletWhenReady();
    fetchWallet();
  };

  const logout = () => {
    setWalletAddress("");
    setWalletConnected(false);
    setWalletInfo(prevInfo => prevInfo ? { ...prevInfo, totalDeposited: 0 } : null); // Reset totalDeposited on disconnect

    // Unsubscribe from wallet channel in centrifuge
    centrifugeService.unsubscribeFromWallet();

    removeCookie(WALLET_COOKIE_NAME);
    removeCookie(SIGNATURE_COOKIE_NAME);
    removeCookie(SIGNATURE_WALLET_COOKIE_NAME);
  };

  useEffect(() => {
    if (!connected) {
      console.log('logout');
      logout();
    }
  }, [connected]);

  return {
    auth,
    completeWalletConnect,
    isTwitterConnected,
    isWalletConnected,
    loading,
    walletAddress,
    name,
    walletInfo,
    walletName: wallet?.adapter.name,
    referralCode,
    setReferralCode,
    fetchWalletInfo: fetchWallet,
    totalDeposited: walletInfo?.totalDeposited || 0
  };
}
