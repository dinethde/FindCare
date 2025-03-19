import axios from "axios";

export interface User {
  id: string;
  email: string;
}

export interface TenantResponse {
  accountId: string;
  auth0Identifier: string;
  email: string;
  tier: string;
}

export const createTenant = async (user: User): Promise<TenantResponse> => {
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
    const response = await axios.post<TenantResponse>(
      `${url}/accounts`,
      tenant
    );

    if (!response.data || !response.data.accountId) {
      throw new Error("Invalid response from server: Missing account ID");
    }

    return response.data;
  } catch (error) {
    throw new Error(
      error instanceof Error ? error.message : "Failed to create tenant"
    );
  }
};

export const setupTenant = async (user: User): Promise<TenantResponse> => {
  if (!user || !user.id || !user.email) {
    throw new Error("Invalid user data. Both ID and email are required.");
  }

  try {
    // Use the existing createTenant function
    const tenantData = await createTenant(user);
    return tenantData;
  } catch (error) {
    throw new Error(
      error instanceof Error ? error.message : "Failed to set up tenant"
    );
  }
};
