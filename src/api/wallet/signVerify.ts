import axios from 'axios';
import { API_HOST } from '@/api/config';

export const signVerify = async (signature: string) => {
  try {
    const response = await axios.post(`${API_HOST}/signVerify`, {
      signature,
    }, {
      withCredentials: true,
    });

    return response.data;
  } catch (error) {
    console.error('Sign verify error:', error);
    throw error;
  }
};
