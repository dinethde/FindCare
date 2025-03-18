interface UserSignUpResponse {
  username: string;
  email: string;
  userId: string;
}

interface UserData {
  username: string;
  email: string;
  password: string;
}

export async function createUser(
  userData: UserData
): Promise<UserSignUpResponse> {
  try {
    const response = await fetch("http://localhost:8081/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: userData.username,
        email: userData.email,
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return {
      username: data.username,
      email: data.email,
      userId: data.userId,
    };
  } catch (error) {
    console.error("Error creating user:", error);
    throw error;
  }
}
