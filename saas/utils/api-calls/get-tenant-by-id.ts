import axios from "axios";

export const getTenantById = async (userId: number) => {
  if (!userId) {
    console.error("User ID is required");
    return null;
  }

  try {
    const backendResponse = await axios.get(
      `${process.env.NEXT_PUBLIC_AGENCY_SERVICE_URL}/accounts`,
      {
        params: {
          id: userId,
        },
      }
    );

    const data = backendResponse.data;
    console.log("User data:", data);

    return data;
  } catch (error) {
    console.error("Error fetching user data:", error);
    return null;
  }
};
