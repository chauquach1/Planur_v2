import normalDateFormat from "../../../_utils/normalDateFormat";
export default function ContentNavCard({trip}) {
  const tripStartDate = normalDateFormat(trip.tripStartDate);
  const tripEndDate = normalDateFormat(trip.tripEndDate);


  return (
    <div id="content-nav-card" className="flex flex-col h-fit w-full bg-bismark-300">
      <h1>{trip.tripName}</h1>
      <h1>{tripStartDate}</h1>
      <h1>{tripEndDate}</h1>
    </div>
  );
}