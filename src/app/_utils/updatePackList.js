'use server';
const updatePackList = async (packList) => {
  const response = await fetch("http://localhost:3000/api/packlist", {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(packList)
  });
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
}

export default updatePackList;