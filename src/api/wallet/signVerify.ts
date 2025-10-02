import { API_HOST } from '@/api/config';

export const signVerify = (wallet: string, signature: string) =>
  fetch(`${API_HOST}/signVerify`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      wallet,
      signature,
    }),
  })
    .then((response) => response.json());
