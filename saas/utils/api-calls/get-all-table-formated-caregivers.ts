import axios from "axios";

export const getAllTableFormatedCaregivers = async () => {
  try {
    const backendResponse = await axios.get(
      `${process.env.NEXT_PUBLIC_GET_ALL_CAREGIVERS_URL}/table-formated`
    );

    const data = backendResponse.data;
    console.log("User data:", data);

    return data;
  } catch (error) {
    console.error("Error fetching user data:", error);
    return null;
  }
};
