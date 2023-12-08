import normalDateFormat from "../../../_utils/normalDateFormat";
export default function ContentNavCard({trip}) {
  const tripStartDate = normalDateFormat(trip.tripStartDate);
  const tripEndDate = normalDateFormat(trip.tripEndDate);


  return (
    <div
      id="content-nav-card"
      className="flex flex-col h-fit w-full bg-bismark-300 p-3 rounded-xl"
    >
      <h1 className="font-semibold text-lg">{trip.tripName}</h1>
      <div id="trip-dates" className="inline-flex gap-2 font-light">
        <h1>{tripStartDate}</h1> -
        <h1>{tripEndDate}</h1>
      </div>
    </div>
  );
}