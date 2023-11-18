import { format } from "date-fns";
export default function TripBanner({trip}) {


  const arrivalDate = format(new Date(trip.tripStartDate), "PP");
  const departureDate = format(new Date(trip.tripEndDate), "PP");

  return (
    <div
      id="currTripContainer"
      className="container flex flex-col w-3/4 justify-content-center"
    >
      <div
        id="trip-details-container"
        className="container  d-flex flex-row flex-wrap border rounded-lg overflow-clip justify-content-around shadow-sm"
      >
        <div className="container bg-slate-600 col rounded-top text-center p-2">
          <p className="m-0 text-2xl text-white font-bold ">{trip.tripName}</p>
          <p className="m-0">{arrivalDate} - {departureDate}</p>
        </div>

        <div className="bg-slate-500 text-white p-2 ">
          <div className="columns-1  flex flex-row flex-wrap align-items-end">
            <p id="tripDest" className="align-self-end my-0 fs-6">
              Destination: {trip.tripDestination ? trip.tripDestination : 'N/A'}
            </p>
          </div>

          <div className="column-1 flex flex-row flex-wrap align-items-end border-bottom">
            <p id="tripAdd" className="align-self-end my-0 fs-6">
              Address: {trip.tripAddress ? trip.tripAddress : 'N/A'}
            </p>
          </div>

          <a
            className="md:hidden mb-1 text-decoration-none text-center text-secondary"
            data-bs-toggle="collapse"
            data-bs-target="#tripDetails2"
            aria-expanded="false"
            aria-controls="collapseExample"
          >
            Trip Details
          </a>

          <div
            id="tripDetailsDropdown"
            className="row columns-3 flex border-t-1 flex-row align-items-baseline justify-around pt-2 px-0 mx-0 mt-2 "
          >
            <div className="w-full flex flex-row p-0">
              <h5 className="align-self-baseline me-2 mb-0 fs-6">Travelers: {trip.tripGuests ? trip.tripGuests : 'N/A'}</h5>
            </div>

            <div className="w-full flex flex-row p-0">
              <h5 className="align-self-baseline me-2 mb-0 fs-6">Reason: {trip.tripReason ? trip.tripReason : 'N/A'}</h5>
            </div>

            <div className="w-full flex flex-row p-0">
              <h5 className="align-self-baseline me-2 mb-0 fs-6">
                Transportation: {trip.tripTransportation ? trip.tripTransportation : 'N/A'}
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
