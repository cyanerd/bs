import { apiDomain } from '@/api/config';

export const getWallet = (wallet: string) =>
  fetch(`${apiDomain}/getWallet`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      wallet,
    }),
  })
    .then((response) => response.json());
