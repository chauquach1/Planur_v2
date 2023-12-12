import { Card, CardBody } from "@nextui-org/react";
// import { format } from "date-fns";

export default function AccommodationsCard({
  accom,
  // handleCardPress,
}) {
  // const checkInDate = format(new Date(accom.accomCheckIn), "PP");
  // const checkOutDate = format(new Date(accom.accomCheckOut), "PP");

  return (
    <Card
      isHoverable
      isPressable
      // isBlurred
      className=" w-full border my-1 shadow-lg bg-white"
      // onPress={() =>
      //   handleCardPress(data, "accommodations")
      // }
    >
      <CardBody>
        <div className="flex flex-col">
          <div className="row flex flex-row flex-wrap justify-between items-baseline">
            <p className="text-md inline-block align-baseline">
              {accom.accomName}
            </p>
          </div>
          <p className="text-small text-default-500">
            {/* {checkInDate} - {checkOutDate} */}
          </p>
          <p className="text-small text-default-500 align-baseline">
            {accom.accomType}
          </p>
        </div>
      </CardBody>
    </Card>
  );
}
