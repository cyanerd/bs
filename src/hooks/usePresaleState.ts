import { useState, useEffect, useCallback, useRef } from 'react';
import { fetchPresaleState } from '../api/presale';
import { PresaleState } from '../api/config';
import { centrifugeService } from '../utils/centrifuge';

export const usePresaleState = (walletName?: string) => {
  const [presaleState, setPresaleState] = useState<PresaleState>({
    backers: 255,
    sold: 4000,
    finish: 1761127157,
    priceNoWL: 0.00023,
  });
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Callback for updating presale state via centrifuge
  const handlePresaleStateUpdate = useCallback((data: any) => {
    if (data && typeof data === 'object') {
      setPresaleState(prevState => {
        const newState = {
          ...prevState,
          ...data,
        };
        console.log('new state from Centrifuge: ', newState);
        return newState;
      });
    }
  }, []);

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

  // Подключаемся к центрифуге при монтировании компонента
  useEffect(() => {
    centrifugeService.connect({
      onPresaleStateUpdate: handlePresaleStateUpdate
    });

    // Отписываемся при размонтировании
    return () => {
      centrifugeService.disconnect();
    };
  }, [handlePresaleStateUpdate]);

  return { presaleState, loaded, error };
};
