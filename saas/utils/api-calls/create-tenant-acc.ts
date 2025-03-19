import axios from "axios";

export interface User {
  id: string;
  email: string;
}

export interface Tenant {
  accountId?: string;
  auth0Identifier: string;
  email: string;
  tier: string;
}

export const createTenant = async (user: User): Promise<Tenant> => {
  if (!user || !user.id || !user.email) {
    throw new Error("Invalid user data. Both ID and email are required.");
  }

  const tenant = {
    auth0Identifier: user.id,
    email: user.email,
    tier: "premium",
  };

  const url = process.env.NEXT_PUBLIC_AGENCY_SERVICE_URL;

  try {
    const response = await axios.post<Tenant>(`${url}/accounts`, tenant);
    return response.data;
  } catch (error) {
    console.error("Error creating tenant:", error);
    throw error;
  }
};
