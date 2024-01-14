import { MdLocationPin } from "react-icons/md";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/react";
import {calendarDateFormat} from "../../_utils/dateFormatterIndex";

export default function StopCard({
  stop,
  // handleCardPress,
}) {
  let address = stop.stopAddress;
  const arrival = calendarDateFormat(stop.stopArrival);
  const departure = calendarDateFormat(stop.stopDeparture);

  return (
    <Card
      isHoverable
      isPressable
      className=" w-full border shadow-none bg-white "
    >
      <CardHeader className="row flex flex-row w-full flex-wrap justify-between lg:justify-start text-lg pb-0">
        <div className="flex flex-row items-center gap-2 me-4 min-w-[280px] max-w-[400px]">
          <MdLocationPin />
          <p className="inline-block">{stop.stopName}</p>
        </div>
      </CardHeader>
      <CardBody className="flex flex-col justify-start text-sm pt-0 gap-2">
        <div className="border-l-2 px-2">
          <p className="text-default-500 ms-auto">Arrival: {arrival}</p>
          {departure ? <p className="text-default-500 ms-auto"> Departure: {departure} </p> : null }
        </div>
        <p className="border-l-2 px-2">
          Address:{" "}
          <span className="font-light">
            {address.street} {address.city}, {address.state} {address.zip},{" "}
            {address.country}
          </span>
        </p>
        <div className="hidden 2xl:block border-l-2 px-2">
          <p className="text-small align-baseline">
            Type: <span className="font-light">{stop.stopType}</span>
          </p>
          <p>
            Email: <span className="font-light">{stop.stopEmail || "-"}</span>
          </p>
          <p>
            Phone Number:{" "}
            <span className="font-light">{stop.stopPhoneNumber || "-"}</span>
          </p>
          <p>
            Confirmation: <span className="font-light">{stop.stopResNum}</span>
          </p>
        </div>
      </CardBody>
    </Card>
  );
}
