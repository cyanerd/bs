import type { WalletContextState } from '@solana/wallet-adapter-react';
import type { CookieGetOptions, CookieSetOptions } from 'universal-cookie';
import Cookies from 'universal-cookie';
import { COOKIE_MAX_AGE, WALLET_COOKIE_NAME } from './const';

export type SignCustomMessageProps = Pick<WalletContextState, 'publicKey' | 'signMessage'>;

const cookies = new Cookies();

export const getCookie = (name: string, options?: CookieGetOptions) => {
  return cookies.get<string | undefined>(name, options);
};

export const removeCookie = (name: string) => {
  return cookies.remove(name, { path: '/' });
};

export const setCookie = (name: string, value: string | boolean | null, options: CookieSetOptions = {}) => {
  cookies.set(name, value, {
    path: '/',
    maxAge: COOKIE_MAX_AGE,
    ...options,
  });
};

export { WALLET_COOKIE_NAME, SIGNATURE_COOKIE_NAME, SIGNATURE_WALLET_COOKIE_NAME, REFERRAL_CODE_COOKIE_NAME } from './const';
