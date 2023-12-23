const getPackList = async (tripId) => {
  try {
    const response = await fetch(
      `http://localhost:3000/api/packlist/?tripId=${tripId}`
    );
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Something went wrong!");
    }
    return data;
  } catch (error) {
    console.error(error);
  }
};

export default async function fetchPackList (tripId) {
  const accomsData = await getPackList(tripId);
  return accomsData;
};
