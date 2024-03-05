import {calendarDateFormat} from "../../_utils/dateFormatterIndex";
import { MdLocationPin, MdEdit, MdDelete } from "react-icons/md";

export default function SummaryContainer({ tripProps, requestProps }) {
  const { selectedTrip, setShowEditTripForm } = tripProps;
  const tripStartDate = calendarDateFormat(selectedTrip.tripStartDate);
  const tripEndDate = calendarDateFormat(selectedTrip.tripEndDate);

  const handleEdit = () => {
    console.log("Edit button clicked");
    requestProps.setRequestType("PUT");
    setShowEditTripForm(true);
  }

  const handleDelete = () => {
    console.log("Delete button clicked");
  }

  return (
    <div className="flex flex-row w-full justify-between items-start">
      <div id={selectedTrip._id} className="flex flex-col w-full max-h-40 ">
        <div className="flex flex-col flex-wrap">
          <p className="text-peach-500  text-4xl font-semibold">
            {selectedTrip.tripName}
          </p>
        </div>
        <p className="text-peach-400  text-2xl font-semibold">
          {tripStartDate} - {tripEndDate}
        </p>
        <p>Destination: {selectedTrip.tripDestination}</p>
        <p>Reason: {selectedTrip.tripReason}</p>
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
