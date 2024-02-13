export default async function fetchAllAccoms(tripId) {
  try {
    const response = await fetch(
      `http://localhost:3000/api/accomsIndex/${tripId}`
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