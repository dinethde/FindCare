import axios from "axios";

export interface TenantResponse {
  accountId: string;
  auth0Identifier: string;
  email: string;
  tier: string;
}

export interface SignupResponse {
  id: string;
  // Add other fields that might be returned from the API
}

/**
 * Signs up a new tenant user
 * @param tenantId - The unique identifier for the tenant (from auth provider)
 * @param email - The tenant's email address
 * @returns Promise containing the signup response data
 */
export const signupTenant = async (
  tenantId: string,
  email: string
): Promise<SignupResponse> => {
  console.log("API Call - signupTenant:", { tenantId, email });

  try {
    const response = await axios.post("http://localhost:8080/api/auth/signup", {
      tenantId: tenantId,
      name: email,
    });

    console.log("API Response - signupTenant:", response.data);

    if (!response.data || !response.data.id) {
      throw new Error("Invalid response format from server");
    }

    return response.data;
  } catch (error) {
    console.error("API Error - signupTenant:", error);
    throw error;
  }
};
