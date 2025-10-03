import { getAuth } from "@/api/getAuth";
import { useWallet } from "@solana/wallet-adapter-react";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export function useUserAuth() {
  const [isWalletConnected, setWalletConnected] = useState(false);
  const [isTwitterConnected, setTwitterConnected] = useState(false);
  const [loading, setLoading] = useState(false);

  const [walletAddress, setWalletAddress] = useState("");
  const [name, setName] = useState("");

  const { connected } = useWallet();

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

  const completeWalletConnect = async (publicKey: string) => {
    setWalletAddress(publicKey);
    setWalletConnected(true);
  };

  const logout = () => {
    setWalletAddress("");
    setWalletConnected(false);
    setTwitterConnected(false);
    setName("");
  };

  useEffect(() => {
    if (!connected) {
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
  };
}
