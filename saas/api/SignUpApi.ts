import axios from "axios";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:8080';

export interface UserData {
  uniqueIdentifier: string;
  username: string;
}

export const createUser = async (user: UserData) => {
  console.log("Create user api called with data:", user);
  const userData = {
    uniqueIdentifier: user.uniqueIdentifier,
    username: user.username,
  };

  console.log("User data to be sent:", userData);

  try {
    const url = `http://localhost:8081/api/create-user`;
    console.log("Making API call to:", url);

    const response = await axios.post(url, userData);
    console.log("API response:", response.data);
    return response.data;
  } catch (error: any) {
    console.error("Error creating user:", {
      message: error.message,
      response: error.response?.data,
      status: error.response?.status
    });
    throw new Error(error.response?.data?.error || "Failed to create user");
  }
};
