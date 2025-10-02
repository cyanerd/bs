import { apiDomain } from '@/api/config';

export const signVerify = (wallet: string, signature: string) =>
  fetch(`${apiDomain}/signVerify`, {
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
