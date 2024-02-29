export default async function fetchAllEmergencyContacts(tripId) {
  try {
    const response = await fetch(
      `http://localhost:3000/api/emergencyContactsIndex/${tripId}`
    );
    const data = await response.json();

    if (!response.ok) {
      console.log(data);
      throw new Error(data.error || "Something went wrong!");
    }
    return data;
  } catch (error) {
    console.error(error);
  }
};

// GET /api/emergencyContacts?contactId=123
export async function getContact (contactId) {
  try {
    const response = await fetch(
      `http://localhost:3000/api/emergencyContacts?contactId=${contactId}`
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

// PUT /api/emergencyContacts
export async function putContact (contact) {
  const response = await fetch("http://localhost:3000/api/emergencyContacts", {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(contact)
  });
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  } 
  else {
    const data = await response.json();
    return data;
  }
}

// POST /api/emergencyContacts
export async function postContact (tripId, contactFormData) {
  console.log('POST ACCOM contactFormData', contactFormData);
  
  try {
    const response = await fetch(`http://localhost:3000/api/emergencyContacts?tripId=${tripId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(contactFormData)
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

// DELETE /api/emergencyContacts
export async function deleteContact (contactId, tripId) {
  const response = await fetch(`http://localhost:3000/api/emergencyContacts?contactId=${contactId}&tripId=${tripId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
  });
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
}