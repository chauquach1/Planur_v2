const getTrips = async (user) => {
  try {
    const response = await fetch(
      `http://localhost:3000/api/tripsindex/${user.email}`
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

export default async function fetchTrips (user) {
  const tripsData = await getTrips(user);
  return tripsData;
};
