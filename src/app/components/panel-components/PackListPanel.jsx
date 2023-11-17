

export default function PackListPanel({ currCardData }) {
  const data = currCardData;
  const categoryCount = (category) => {
    let list = data[category]; // Access the category in sampleList
    let count = 0;
    Object.values(list).forEach((item) => { // Use forEach for iterating
      if (item === true) {
        <p>{item}</p>
      }
    });
    return count;
  }

  return (
    <>
      <h1>Clothes List</h1>
      {categoryCount("clothes")}
      <h1>Toiletries List</h1>
      {categoryCount("toiletries")}
      <h1>Miscellaneous List</h1>
      {categoryCount("miscellaneous")}
      <h1>Emergency Contact</h1>
      <p className="text-xl">
        Name: {data.emergencyContact.firstName}{" "}
        {data.emergencyContact.lastName}
      </p>
      <p>Phone Number: {data.emergencyContact.phoneNumber}</p>
      <p>Email: {data.emergencyContact.email}</p>
      <p>Relationship: {data.emergencyContact.relationship}</p>
      <p>Street:{data.emergencyContact.address.street}</p>
      <p>City: {data.emergencyContact.address.city}</p>
      <p>State: {data.emergencyContact.address.state}</p>
      <p>Zip: {data.emergencyContact.address.zip}</p>
      <p>Country: {data.emergencyContact.address.country}</p>
      <p>PackListId: {data._id}</p>
    </>
  );
}
