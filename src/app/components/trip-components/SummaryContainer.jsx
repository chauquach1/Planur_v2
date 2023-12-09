import normalDateFormat from "../../_utils/normalDateFormat";
export default function SummaryContainer({ trip }) {
  const tripStartDate = normalDateFormat(trip.tripStartDate);
  const tripEndDate = normalDateFormat(trip.tripEndDate);
  return (
    <div id={trip._id.oid} className="max-w-[400px] max-h-40">
      <div className="flex flex-col">
        <p className="text-md">{trip.tripName}</p>
      </div>
      <p>
        {tripStartDate} - {tripEndDate}
      </p>
      <p>Destination: {trip.tripDestination}</p>
      <p>Reason: {trip.tripReason}</p>
      <p>Number of Travelers: {trip.tripGuests}</p>
    </div>
  );
}
