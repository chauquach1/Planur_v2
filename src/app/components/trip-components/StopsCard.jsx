import { Card, CardBody } from "@nextui-org/react";
import { format } from "date-fns";

const sampleStop = {
  _id: "65557a4bc70c4bee8f316d31",
  stopName: "Grandma's House",
  stopAddress: {
    street: "717 Merit Dr",
    city: "San Marcos",
    state: "California",
    zip: "92078",
    country: "United States",
  },
  stopArrival: "2024-01-05T00:00:00Z",
  stopDeparture: "2024-01-06T00:00:00Z",
  stopType: "Family",
  stopTransportation: "Car",
  stopInterest: "Must-Go",
  stopResNum: "",
  stopNotes: "some notes",
  stopPhoneNumber: "8589223709",
  stopEmail: "chau268@gmail.com",
};

export default function StopsCard({data}) {
  const arrivalDate = format(new Date(data.stopArrival), "PP");
  const departureDate = format(new Date(data.stopDeparture), "PP");

  return (
    <>
      <Card
        isHoverable
        isPressable
        isBlurred
        className="data-[hover=true]:bg-content2 dark:data-[hover=true]:bg-content2 w-full max-w-xs sm:max-w-[300px] md:max-w-[400px] border my-1 shadow-lg bg-background/60 dark:bg-default-100/50"
      >
        <CardBody className="">
          <div className="flex flex-col">
            <div className="row flex flex-row flex-wrap justify-between items-baseline">
              <p className="text-md inline-block align-baseline">
                {data.stopName}
              </p>
              <p className="text-small inline-block text-default-500 align-baseline">
                {data.stopType}
              </p>
              <p className="text-small text-default-500">
                {data.stopArrival && data.stopDeparture
                  ? `${arrivalDate}  - ${departureDate}`
                  : null}
                {data.stopArrival && !data.stopDeparture
                  ? `${arrivalDate}`
                  : null}
              </p>
            </div>
            <div className="row flex flex-row flex-wrap justify-between items-baseline">
              <p className="text-small text-default-500">
                {data.stopAddress.street
                  ? data.stopAddress.street
                  : null}
              </p>
            </div>
          </div>
        </CardBody>
      </Card>
    </>
  );
}
