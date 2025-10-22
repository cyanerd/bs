import axios from "axios";
import { API_HOST, PresaleResponse, PresaleState, getBasicAuthHeaders, getWalletParams } from "./config";
import {toast} from 'react-toastify';

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
      priceNoWL: 0.00023,
    };
  }
};

export interface WalletInfo {
  tier: number;
  price: number;
  code: string;
  totalDeposited: number;
  boostSolflare: number;
  boostMagicEden: number;
  boostBonk: number;
  boostPartner: number;
  boost1Hour: number;
  boostCode: number;
}

type WalletInfoResponse = {
  result: string;
  data: WalletInfo;
};

export const fetchWalletInfo = async (
  walletName?: string,
  referralCode?: string,
  refCodeChanged?: boolean
): Promise<WalletInfo> => {
  const url = `${API_HOST}/presale/wallet`;
  try {
    const params = getWalletParams(walletName, referralCode);
    const response = await axios.get<WalletInfoResponse>(url, {
      headers: { ...getBasicAuthHeaders() },
      params,
      withCredentials: true,
    });
    if (response.data.result === 'success') {
      if (refCodeChanged && referralCode) {
        if (response.data.data?.code && response.data.data?.code === referralCode) {
          toast.success(`Referral code applied: ${referralCode}`, {
            autoClose: 5000,
          });
        } else {
          toast.error(`Referral code is not valid`, {
            autoClose: 5000,
          });
        }
      }
      return response.data.data;
    }
    throw new Error('API returned non-success result');
  } catch (error) {
    console.error('Failed to fetch wallet info:', error);
    throw error;
  }
};
