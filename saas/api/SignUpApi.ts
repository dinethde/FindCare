import axios from "axios";

// Use the appropriate API base URL for backend communication
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:8080";

export interface UserData {
  email: string;
  firstName: string;
  lastName: string;
  clerkId: string;
  // Add other necessary fields
}

export const createUser = async (userData: UserData) => {
  console.log("Create user api called", userData);

  try {
    const response = await axios.post(`${API_BASE_URL}/api/users`, userData);
    return response.data;
  } catch (error) {
    console.error("Error creating user:", error);
    throw new Error("Failed to create user");
  }
};
