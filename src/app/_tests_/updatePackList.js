// const updatePackList = async (formData) => {
//   const rawFormData = Object.fromEntries(formData.entries())
//   const response = await fetch('http://localhost:3000/api/packlist', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(rawFormData)
//   });
//   if (!response.ok) {
//     throw new Error(`HTTP error! status: ${response.status}`);
//   }

//   const result = await response.json();
//   console.log('result', result);
// }


const updatePackList = async (formData) => {
  // const rawFormData = Object.fromEntries(formData.entries())
  const response = await fetch('http://localhost:3000/api/packlist', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
  });
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const result = await response.json();
  console.log('result', result);
}

export default updatePackList;