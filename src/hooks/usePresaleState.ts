import { useState, useEffect } from 'react';
import { fetchPresaleState } from '../api/presale';
import { PresaleState } from '../api/config';

export const usePresaleState = (walletName?: string) => {
  const [presaleState, setPresaleState] = useState<PresaleState>({
    backers: 255,
    sold: 4000,
    finish: 1761127157,
    publicPrice: 0.00023,
    tgePrice: 0.0045
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadPresaleState = async () => {
      try {
        setLoading(true);
        const data = await fetchPresaleState(walletName);
        setPresaleState(data);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load presale state');
      } finally {
        setLoading(false);
      }
    };

    loadPresaleState();
  }, [walletName]);

  return { presaleState, loading, error };
};
