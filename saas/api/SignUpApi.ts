import axios from "axios";

/**
 * Base URL for API calls - falls back to localhost if environment variable is not set
 */
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:8081';

/**
 * Interface for user data required by the API
 */
export interface UserData {
  id: string;
  email: string;
}

/**
 * Interface for API response
 */
export interface UserCreationResponse {
  userId: string;
  username: string;
  // Add other expected response fields
}

/**
 * Creates a user by sending user data to the backend API
 * @param user - User data including id and email
 * @returns Promise with user creation response
 */
export const createUser = async (user: UserData): Promise<UserCreationResponse> => {
  const userData = {
    uniqueIdentifier: user.id,
    username: user.email,
  };

  try {
    const url = `${API_BASE_URL}/api/create-user`;

    const response = await axios.post<UserCreationResponse>(url, userData);
    return response.data;
  } catch (error) {
    // Check if it's an axios error with a response
    if (axios.isAxiosError(error) && error.response) {
      throw new Error(
        error.response.data?.error ||
        `Failed to create user: Server returned ${error.response.status}`
      );
    }

    // Handle network errors or other issues
    throw new Error(
      error instanceof Error
        ? `User creation failed: ${error.message}`
        : "Unknown error during user creation"
    );
  }
};
