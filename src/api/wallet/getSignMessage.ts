import { apiDomain } from '@/api/config';

export const getSignMessage = (wallet: string) =>
  fetch(`${apiDomain}/getSignMessage`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      wallet,
    }),
  })
    .then((response) => response.json());
