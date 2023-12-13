import { MdLocalHotel } from "react-icons/md";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/react";
import normalDateFormat from "../../_utils/normalDateFormat";

export default function AccommodationsCard({
  accom,
  // handleCardPress,
}) {
  let address = accom.accomAddress;
  const checkInDate = normalDateFormat(accom.accomCheckIn);
  const checkOutDate = normalDateFormat(accom.accomCheckOut);

  return (
    <Card
      isHoverable
      isPressable
      // isBlurred
      className=" w-full border shadow-none bg-white "
      // onPress={() =>
      //   handleCardPress(data, "accommodations")
      // }
    >
      <CardHeader className="row flex flex-row w-full flex-wrap justify-between lg:justify-start text-lg pb-0">
        <div className="flex flex-row items-center gap-2 me-4 min-w-[280px] max-w-[400px]">
          <MdLocalHotel />
          <p className="inline-block">{accom.accomName}</p>
        </div>
      </CardHeader>
      <CardBody className="flex flex-col justify-start text-sm pt-0 gap-2">
        <div className="border-l-2 px-2">
          <p className="text-default-500 ms-auto">
            Check In: {checkInDate}
          </p>
          <p className="text-default-500 ms-auto">
            Check Out: {checkOutDate}
          </p>
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
            Type: <span className="font-light">{accom.accomType}</span>
          </p>
          <p>
            Email: <span className="font-light">{accom.accomEmail || "-"}</span>
          </p>
          <p>
            Phone Number:{" "}
            <span className="font-light">{accom.accomPhoneNumber || "-"}</span>
          </p>
          <p>
            Confirmation:{" "}
            <span className="font-light">{accom.accomResNum}</span>
          </p>
        </div>
      </CardBody>
    </Card>
  );
}
