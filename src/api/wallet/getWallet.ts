import axios from 'axios';
import { API_HOST } from '@/api/config';

export const getWallet = async () => {
  try {
    const response = await axios.post(`${API_HOST}/getWallet`, {}, {
      withCredentials: true,
    });

    return response.data;
  } catch (error) {
    console.error('Get wallet error:', error);
    throw error;
  }
};
