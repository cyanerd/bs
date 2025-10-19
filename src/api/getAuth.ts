import { API_HOST, getBasicAuthHeaders } from "./config";

export const getAuth = async () => {
  try {
    const response = await fetch(`${API_HOST}/auth/jwt`, {
      method: "GET",
      headers: {
        ...getBasicAuthHeaders(),
      },
    });

    return response.json();
  } catch (error) {
    console.error("Auth API error:", error);
    throw error;
  }
};
