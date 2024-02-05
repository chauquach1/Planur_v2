// GET /api/stops?stopId=123
export async function getStop (stopId) {
  try {
    const response = await fetch(
      `http://localhost:3000/api/stops?stopId=${stopId}`
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

// PUT /api/stops
export async function putStop (stop) {
  const response = await fetch("http://localhost:3000/api/stops", {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(stop)
  });
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  } 
  else {
    const data = await response.json();
    return data;
  }
}

// POST /api/stops
export async function postStop (tripId, stopFormDate) {
  console.log('POST STOP stopFormDate', stopFormDate);
  
  try {
    const response = await fetch(`http://localhost:3000/api/stops?tripId=${tripId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(stopFormDate)
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

// DELETE /api/stops
export async function deleteStop (stopId) {
  const response = await fetch(`http://localhost:3000/api/stops?stopId=${stopId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
  });
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
}