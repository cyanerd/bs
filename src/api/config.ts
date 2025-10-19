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

export const API_X_CALLBACK = `https://presale.blockstranding.com/api/auth/twitter`;

export interface PresaleState {
  backers: number;
  sold: number;
  finish: number;
  publicPrice: number;
  tgePrice: number;
}

export interface PresaleResponse {
  result: string;
  data: PresaleState;
}
