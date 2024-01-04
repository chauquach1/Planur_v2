export default async function changePackStatus(category, item, packListId) {
  const response = await fetch("http://localhost:3000/api/packlist", {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({category, item, packListId})
  });
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  
}