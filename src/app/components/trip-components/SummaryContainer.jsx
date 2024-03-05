import {calendarDateFormat} from "../../_utils/dateFormatterIndex";
import { MdLocationPin, MdEdit, MdDelete } from "react-icons/md";

export default function SummaryContainer({ trip }) {
  const tripStartDate = calendarDateFormat(trip.tripStartDate);
  const tripEndDate = calendarDateFormat(trip.tripEndDate);

  const handleEdit = () => {
    console.log("Edit button clicked");
  }

  const handleDelete = () => {
    console.log("Delete button clicked");
  }

  return (
    <div className="flex flex-row w-full justify-between items-start">
      <div id={trip._id} className="flex flex-col w-full max-h-40 ">
        <div className="flex flex-col flex-wrap">
          <p className="text-peach-500  text-4xl font-semibold">
            {trip.tripName}
          </p>
        </div>
        <p className="text-peach-400  text-2xl font-semibold">
          {tripStartDate} - {tripEndDate}
        </p>
        <p>Destination: {trip.tripDestination}</p>
        <p>Reason: {trip.tripReason}</p>
      </div>
      <div className="flex flex-row gap-1 ms-auto text-medium p-2">
        <button onClick={handleEdit}>
          <MdEdit />
        </button>
        <button onClick={handleDelete}>
          <MdDelete />
        </button>
      </div>
    </div>
  );
}
