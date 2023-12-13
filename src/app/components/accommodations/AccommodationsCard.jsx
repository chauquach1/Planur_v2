import { MdLocalHotel } from "react-icons/md";
import { Card, CardBody } from "@nextui-org/react";
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
      // isPressable
      // isBlurred
      className=" w-full border my-1 shadow-lg bg-white"
      // onPress={() =>
      //   handleCardPress(data, "accommodations")
      // }
    >
      <CardBody>
        <div className="flex flex-col">
          <div className="row flex flex-row flex-wrap justify-start items-center gap-3 text-lg">
            <MdLocalHotel />
            <p className="inline-block align-baseline">
              {accom.accomName}
            </p>
          </div>
          <p className="text-default-500">
            {checkInDate} - {checkOutDate}
          </p>
          <p className="text-small text-default-500 align-baseline">
            {accom.accomType}
          </p>
          <div
            id="accom-contact-info"
            className="flex flex-row flex-wrap font-light gap-2"
          >
            <h1 className="font-normal">Email:</h1>
            <h1 className="">{accom.accomEmail || "-"}</h1>
            <h1 className="font-normal">Phone Number:</h1>
            <h1 className="">{accom.accomPhoneNumber || "-"}</h1>
          </div>
          <h1 className="font-normal">
            Confirmation:{" "}
            <span className="font-light">{accom.accomResNum}</span>
          </h1>
          <div
            id="accom-address"
            className="flex flex-row flex-wrap font-light gap-2"
          >
            <h1 className="font-normal">Address:</h1>
            <h1 className="col-span-3">{address.street}</h1>
            <h1 className="col-span-3">{address.city},</h1>
            <h1 className="col-span-2">{address.state}</h1>
            <h1 className="col-span-2">{address.zip},</h1>
            <h1 className="col-span-2">{address.country}</h1>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
