export default async function fetchPackList (packListId) {
  try {
    const response = await fetch(
      `http://localhost:3000/api/packlist?packListId=${packListId}`
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