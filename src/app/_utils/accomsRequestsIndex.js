// GET /api/accommodations?accomId=123
export async function getAccom (accomId) {
  try {
    const response = await fetch(
      `http://localhost:3000/api/accommodations?accomId=${accomId}`
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

// PUT /api/accommodations
export async function putAccom (accommodation) {
  const response = await fetch("http://localhost:3000/api/accommodations", {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(accommodation)
  });
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
}

// POST /api/accommodations
export async function postAccom (tripId, accomFormData) {
  console.log('POST ACCOM accomFormData', accomFormData);
  console.log('POST ACCOM tripId', tripId);
  
  const response = await fetch(`http://localhost:3000/api/accommodations?tripId=${tripId}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(accomFormData)
  });
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
}

// DELETE /api/accommodations
export async function deleteAccom (accomId) {
  const response = await fetch(`http://localhost:3000/api/accommodations?accomId=${accomId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
  });
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
}