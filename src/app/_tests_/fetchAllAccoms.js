const getAccoms = async (tripId) => {
  try {
    const response = await fetch(
      `http://localhost:3000/api/accommodations/?tripId=${tripId}`
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

export default async function fetchAccoms (tripId) {
  const accomsData = await getAccoms(tripId);
  return accomsData;
};
