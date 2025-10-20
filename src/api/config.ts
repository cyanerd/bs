const isLocalhost = typeof window !== 'undefined' && window.location.hostname === 'localhost';
export const API_HOST = isLocalhost ? "http://localhost:3001/api" : "https://presale.blockstranding.com/api";

export const NEED_BASIC_AUTH = true;
const BASIC_AUTH_USER = 'dev';
const BASIC_AUTH_PASS = '123123123qweqweqwe';
export const getBasicAuthHeaders = (): Record<string, string> => {
  if (!NEED_BASIC_AUTH) return {};
  try {
    const token = btoa(`${BASIC_AUTH_USER}:${BASIC_AUTH_PASS}`);
    return { Authorization: `Basic ${token}` };
  } catch {
    return {};
  }
};


export const API_X_CALLBACK = 'https://presale.blockstranding.com/api/presale/auth/twitter';

export const isSolflareWallet = (walletName?: string): boolean => {
  if (!walletName) return false;
  return walletName.toLowerCase().includes('solflare');
};

export const PRESALE_TOTAL_SOL = 4000;

export const getWalletParams = (walletName?: string, referralCode?: string): Record<string, string> => {
  const params: Record<string, string> = {};

  if (isSolflareWallet(walletName)) {
    params.solflare = '1';
  }

  if (referralCode) {
    params.code = referralCode;
  }

  return params;
};

export interface PresaleState {
  backers: number;
  sold: number;
  finish: number;
  priceNoWL: number;
}

export interface PresaleResponse {
  result: string;
  data: PresaleState;
}
