export default async function fetchAllStops(tripId) {
  try {
    const response = await fetch(
      `http://localhost:3000/api/stopsIndex/${tripId}`
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

// GET /api/stops?stopId=123
export async function fetchStop (stopId) {
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
}

// POST /api/stops
export async function postStop (tripId, stop) {
  const response = await fetch(`http://localhost:3000/api/stops?tripId=${tripId}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(stop)
  });
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
}

// DELETE /api/stops
export async function deleteStop (stopId) {
  const response = await fetch(`http://localhost:3000/api/stops?stopId=${stopId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(stop)
  });
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
}