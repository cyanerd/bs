import { useCallback, useEffect, useMemo, useState } from "react";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";

type UseWalletBalanceResult = {
  balanceLamports: number | null;
  balanceSol: string | null;
  loading: boolean;
  error: Error | null;
  refresh: () => Promise<void>;
};

export function useWalletBalance(): UseWalletBalanceResult {
  const { connection } = useConnection();
  const { publicKey } = useWallet();

  const [lamports, setLamports] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const fetchBalance = useCallback(async () => {
    if (!publicKey) {
      setLamports(null);
      return;
    }

    setLoading(true);
    setError(null);
    try {
      const value = await connection.getBalance(publicKey);
      setLamports(value);
    } catch (e) {
      setError(e as Error);
    } finally {
      setLoading(false);
    }
  }, [connection, publicKey]);

  useEffect(() => {
    let cancelled = false;
    let subscriptionId: number | undefined;

    if (!publicKey) {
      setLamports(null);
      return () => {};
    }

    // Initial fetch
    fetchBalance();

    // Subscribe for live updates
    (async () => {
      try {
        subscriptionId = await connection.onAccountChange(
          publicKey,
          (accountInfo) => {
            if (!cancelled) {
              setLamports(accountInfo.lamports);
            }
          },
        );
      } catch (e) {
        setError(e as Error);
      }
    })();

    return () => {
      cancelled = true;
      if (subscriptionId !== undefined) {
        connection.removeAccountChangeListener(subscriptionId);
      }
    };
  }, [connection, publicKey, fetchBalance]);

  const balanceSol = useMemo(() => {
    if (lamports == null) return null;
    return (lamports / LAMPORTS_PER_SOL)?.toFixed(4);
  }, [lamports]);

  return {
    balanceLamports: lamports,
    balanceSol,
    loading,
    error,
    refresh: fetchBalance,
  };
}
