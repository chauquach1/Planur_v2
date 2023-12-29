'use server';
const getPackList = async (packListId) => {
  try {
    const response = await fetch(
      `http://localhost:3000/api/packlist?${packListId}`
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

export default async function fetchPackList (packListId) {
  const packList = await getPackList(packListId);
  return packList;
};
