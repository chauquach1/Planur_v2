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
  else {
    const data = await response.json();
    return data;
  }
}

// POST /api/accommodations
export async function postAccom (tripId, accomFormData) {
  console.log('POST ACCOM accomFormData', accomFormData);
  
  try {
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
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

// DELETE /api/accommodations
export async function deleteAccom (accomId, tripId) {
  const response = await fetch(`http://localhost:3000/api/accommodations?accomId=${accomId}&tripId=${tripId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
  });
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
}