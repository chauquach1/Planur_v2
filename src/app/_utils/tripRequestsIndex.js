export default async function createNewTrip(userId, tripDetails) {
  console.log('POST TRIP NewTripForm', tripDetails);

  try {
    const response = await fetch(
      `http://localhost:3000/api/trip?userId=${userId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(tripDetails)
      }
    );
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data, "Something went wrong!");
    }
    console.log('POST TRIP NewTripForm data', data);
    return data;
  } catch (error) {
    console.error(error);
  }
};