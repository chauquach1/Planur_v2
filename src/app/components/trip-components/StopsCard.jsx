import { Card, CardBody } from "@nextui-org/react";
import { format } from "date-fns";

export default function StopsCard({
  data,
  prevCardData,
  prevCardType,
  handleCardPress,
}) {
  const arrivalDate = format(new Date(data.stopArrival), "PP");
  const departureDate = format(new Date(data.stopDeparture), "PP");

  return (
    <>
      <Card
        isHoverable
        isPressable
        // isBlurred
        className="w-full border my-1 shadow-lg bg-white"
        onPress={() => handleCardPress(data, "stops")}
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
                {data.stopAddress.street ? data.stopAddress.street : null}
              </p>
            </div>
          </div>
        </CardBody>
      </Card>
    </>
  );
}
