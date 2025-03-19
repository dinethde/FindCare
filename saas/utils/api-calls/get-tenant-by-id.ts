import axios from "axios";

export const getTenantById = async (userId: number) => {
    if (!userId) {
        console.error("User ID is required");
        return null;
    }

    const backendResponse = await axios.get(
        `${process.env.NEXT_PUBLIC_AGENCY_SERVICE_URL}/user/${userId}`,
    )

    const data = await backendResponse.data();

    console.log("User data:", data);
}