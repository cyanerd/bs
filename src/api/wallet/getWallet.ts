import { API_HOST } from '@/api/config';

export const getWallet = (wallet: string) =>
  fetch(`${API_HOST}/getWallet`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      wallet,
    }),
  })
    .then((response) => response.json());
