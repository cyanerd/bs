import { apiDomain } from "./config";

export const getAuth = async () => {
  try {
    const response = await fetch(`${apiDomain}/auth/jwt`, {
      method: "GET",
    });

    return response.json();
  } catch (error) {
    console.error("Auth API error:", error);
    throw error;
  }
};
