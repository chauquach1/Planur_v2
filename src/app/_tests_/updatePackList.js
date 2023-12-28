const updatePackList = async (packList) => {
  const response = await fetch("http://localhost:3000/api/packlist", {
    method: 'POST',
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