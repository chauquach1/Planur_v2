import calendarDateFormat from "../../../_utils/calendarDateFormat";
export default function ContentNavCard({trip}) {
  const formattedDates = calendarDateFormat(trip.tripStartDate, trip.tripEndDate);
  console.log('formattedDates', formattedDates);


  return (
    <div id="content-nav-card" className="flex flex-col h-fit w-full bg-bismark-300">
      <h1>{trip.tripName}</h1>
    </div>
  );
}