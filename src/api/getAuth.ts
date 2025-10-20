import axios from "axios";
import { API_HOST, getBasicAuthHeaders } from "./config";

export const getAuth = async () => {
  try {
    const response = await axios.get(`${API_HOST}/auth/jwt`, {
      headers: {
        ...getBasicAuthHeaders(),
      },
      withCredentials: true,
    });

    return response.data;
  } catch (error) {
    console.error("Auth API error:", error);
    throw error;
  }
};
