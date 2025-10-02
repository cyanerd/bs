import { API_HOST } from '@/api/config';

export const getSignMessage = (wallet: string) =>
  fetch(`${API_HOST}/getSignMessage`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      wallet,
    }),
  })
    .then((response) => response.json());
