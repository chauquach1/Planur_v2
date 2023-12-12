const fetchStops = async (user) => {
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

export default async function getAllStops (user) {
  const stopsData = await fetchStops(user);
  return stopsData;
};
