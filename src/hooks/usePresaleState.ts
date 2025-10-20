import { useState, useEffect } from 'react';
import { fetchPresaleState } from '../api/presale';
import { PresaleState } from '../api/config';

export const usePresaleState = (walletName?: string) => {
  const [presaleState, setPresaleState] = useState<PresaleState>({
    backers: 255,
    sold: 4000,
    finish: 1761127157,
    priceNoWL: 0.00023,
  });
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadPresaleState = async () => {
      try {
        const data = await fetchPresaleState(walletName);
        setPresaleState(data);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load presale state');
      } finally {
        setLoaded(true);
      }
    };

    loadPresaleState();
  }, [walletName]);

  return { presaleState, loaded, error };
};
