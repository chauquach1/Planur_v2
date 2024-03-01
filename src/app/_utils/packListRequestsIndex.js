// GET /api/packlist?packListId=123
export async function fetchPackList (tripId) {
  console.log('fetchPackList tripId:', tripId);

  try {
    const response = await fetch(
      `http://localhost:3000/api/packlist?tripId=${tripId}`
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

// PUT /api/packlist
export async function putPackList (packList) {
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

// POST /api/packlist
export async function postPackList (tripId, packList) {
  const response = await fetch(`http://localhost:3000/api/packlist?tripId=${tripId}`, {
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