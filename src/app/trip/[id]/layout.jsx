
export default async function TripDashboard({ children, params }) {

  const tripId = params.id;

  console.log("Trip ID:", tripId);

  const response = await fetch(`http://localhost:3000/api/trip/${tripId}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const trip = await response.json();
  console.log(trip);
  


  return (
    <div>
      <h1>Trip Name:{trip.tripName}</h1>
      <p>Trip Destination: {trip.destination}</p>
      <p>Trip Start: {trip.startDate}</p>
      <p>Trip End: {trip.endDate}</p>
      <p>Trip Guests: {trip.guests}</p>
      <p>Trip Reason: {trip.reason}</p>
      <p>Trip Transportation: {trip.transportation}</p>
      <p>Trip Accommodation: {trip.accommodation}</p>
      <p>Trip Address: {trip.address}</p>
    </div>
  );
}
