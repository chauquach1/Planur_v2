import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
} from "@nextui-org/react";

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

const arrivalDate = format(new Date(sampleStop.stopArrival), "PP");
const departureDate = format(new Date(sampleStop.stopDeparture), "PP");


export default function StopsCard() {
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
                {sampleStop.stopName}
              </p>
              <p className="text-small inline-block text-default-500 align-baseline">
                {sampleStop.stopType}
              </p>
              <p className="text-small text-default-500">
                {sampleStop.stopArrival && sampleStop.stopDeparture
                  ? `${arrivalDate}  - ${departureDate}`
                  : null}
                {sampleStop.stopArrival && !sampleStop.stopDeparture
                  ? `${arrivalDate}`
                  : null}
              </p>
            </div>
            <div className="row flex flex-row flex-wrap justify-between items-baseline">
              <p className="text-small text-default-500">
                {sampleStop.stopAddress.street
                  ? sampleStop.stopAddress.street
                  : null}
              </p>
            </div>
          </div>
        </CardBody>
      </Card>
    </>
  );
}
