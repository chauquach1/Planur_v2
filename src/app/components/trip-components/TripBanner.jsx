import {
  Accordion,
  AccordionItem,
} from "@nextui-org/react";
import { format } from "date-fns";
import EditTripForm from "../form-components/EditTripForm";

export default function TripBanner({ uuid, tripId, trip }) {
  const arrivalDate = format(new Date(trip.tripStartDate), "PP");
  const departureDate = format(new Date(trip.tripEndDate), "PP");

  return (
    <>
      <Accordion isCompact>
        <AccordionItem
          key="1"
          aria-label="Accordion 1"
          className="text-start"
          startContent={
            <div className="text-start pb-0">
              <p className="m-0 text-2xl text-white font-bold ">
                {trip.tripName}
              </p>
              <p className="m-0">
                {arrivalDate} - {departureDate}
              </p>
            </div>
          }
        >
          <div className="container flex flex-col">
            <p id="tripDest" className="align-self-end my-0 fs-6">
              Destination: {trip.tripDestination ? trip.tripDestination : "N/A"}
            </p>
            <h5 className="align-self-baseline me-2 mb-0 fs-6">
              Travelers: {trip.tripGuests ? trip.tripGuests : "N/A"}
            </h5>
            <h5 className="align-self-baseline me-2 mb-0 fs-6">
              Reason: {trip.tripReason ? trip.tripReason : "N/A"}
            </h5>
            <h5 className="align-self-baseline me-2 mb-0 fs-6">
              Transportation:{" "}
              {trip.tripTransportation ? trip.tripTransportation : "N/A"}
            </h5>
            <EditTripForm uuid={uuid} trip={trip} tripId={tripId} />
          </div>
        </AccordionItem>
      </Accordion>
    </>
  );
}
