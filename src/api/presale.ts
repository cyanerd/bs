import axios from "axios";
import { API_HOST, PresaleResponse, PresaleState, getBasicAuthHeaders, getWalletParams } from "./config";

export const fetchPresaleState = async (walletName?: string): Promise<PresaleState> => {
  try {
    const params = getWalletParams(walletName);
    const response = await axios.get<PresaleResponse>(`${API_HOST}/presale/state`, {
      headers: { ...getBasicAuthHeaders() },
      params,
      withCredentials: true,
    });

    if (response.data.result === 'success') {
      return response.data.data;
    } else {
      throw new Error('API returned non-success result');
    }
  } catch (error) {
    console.error('Failed to fetch presale state:', error);
    // Return default values if API fails
    return {
      backers: 255,
      sold: 4000,
      finish: 1761127157,
      publicPrice: 0.00023,
      tgePrice: 0.0045
    };
  }
};

export interface WalletInfo {
  tier: number;
  price: number;
  totalDeposited: number;
  boostSolflare: number;
  boostBonk: number;
  boostLucky: number;
  boost1Hour: number;
  boostCode: number;
}

type WalletInfoResponse = {
  result: string;
  data: WalletInfo;
};

export const fetchWalletInfo = async (walletName?: string, referralCode?: string): Promise<WalletInfo> => {
  const url = `${API_HOST}/presale/wallet`;
  try {
    const params = getWalletParams(walletName, referralCode);
    const response = await axios.get<WalletInfoResponse>(url, {
      headers: { ...getBasicAuthHeaders() },
      params,
      withCredentials: true,
    });
    if (response.data.result === 'success') {
      return response.data.data;
    }
    throw new Error('API returned non-success result');
  } catch (error) {
    console.error('Failed to fetch wallet info:', error);
    throw error;
  }
};
