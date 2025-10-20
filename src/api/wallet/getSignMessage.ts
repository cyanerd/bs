import axios from 'axios';
import { API_HOST } from '@/api/config';

export const getSignMessage = async () => {
  try {
    const response = await axios.post(`${API_HOST}/getSignMessage`, {}, {
      withCredentials: true,
    });

    return response.data;
  } catch (error) {
    console.error('Get sign message error:', error);
    throw error;
  }
};
