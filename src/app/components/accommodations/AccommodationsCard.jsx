import { LuMapPin } from "react-icons/lu";
import { MdLocalHotel } from "react-icons/md";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/react";
import {calendarDateFormat} from "../../_utils/dateFormatterIndex";
import { deleteAccom } from "../../_utils/accomsRequestsIndex";
import SlideOutForm from "../user-dashboard-components/content-side-components/SlideOutForm";
import NewAccomsForm from "./NewAccomsForm";
import { useState, useEffect, useRef } from "react";
import { set } from "date-fns";

export function TextSpace ({category, value}) {
  return (
    <>
      {category && category[value] ? (
        category[value]
      ) : (
        <span className="italic text-slate-500">
          {value.charAt(0).toUpperCase() + value.slice(1)}
        </span>
      )}
    </>
  );
}

export default function AccommodationsCard({ fetchedAccom, displayProps, tripProps, requestProps, accomProps, ...props }) {
  const [accom, setAccom] = useState(fetchedAccom);
  const checkInDate = calendarDateFormat(accom.accomCheckIn);
  const checkOutDate = calendarDateFormat(accom.accomCheckOut);
  const address = accom.accomAddress;
  const updateAccom =() => {
    requestProps.setRequestType("PUT");
    accomProps.setActiveAccom(accom);
    accomProps.setShowAccomForm(true);
  }

    const handleDeleteAccom = (deleteId) => {
    // Use filter to return a new array excluding the item with the matching accomId
    const updatedAccomsIndex = accomProps.accomsIndex.filter(accom => accom._id !== deleteId);
    console.log('updatedAccomsIndex', updatedAccomsIndex);
    accomProps.setAccomsIndex(updatedAccomsIndex);
    deleteAccom(deleteId);
  };

  useEffect(() => {
    setAccom(fetchedAccom);
  }, [fetchedAccom]);

  return (
    <>
    <Card
      // isHoverable
      // isPressable
      // isBlurred
      className=" w-full border shadow-none bg-white "
    >
      <CardHeader className="row flex flex-row w-full flex-wrap justify-between lg:justify-start text-lg pb-1">
        <div className="flex flex-row items-center gap-2 me-4 min-w-[280px] max-w-[400px]">
          <MdLocalHotel />
          <p className="inline-block">{accom.accomName}</p>
        </div>
        <div className="ms-auto text-sm">
        {/* Original form rendering buttons:
        <button onClick={() => {props.setRequestType("PUT"), props.setActiveAccom(accom)}}>Edit</button> | <button onClick={() => deleteAccom(accom._id)}>Delete</button>
         */}

        {/* New form rendering buttons: */}
        <button onClick={updateAccom}>Edit</button> | <button onClick={() => handleDeleteAccom(accom._id)}>Delete</button>
        </div>
      </CardHeader>
      <CardBody className="flex flex-col justify-start text-sm pt-0 ps-5 gap-2">
        <div className="flex flex-col 2xl:flex-row gap-2">
          <div className="border-l-2 px-2 min-w-[250px]">
            <p className="text-default-500 ms-auto">Check In: {checkInDate}</p>
            <p className="text-default-500 ms-auto">
              Check Out: {checkOutDate}
            </p>
          </div>
          <div className="border-l-2 px-2 min-w-[250px] font-light inline-flex  gap-2">
            <p><TextSpace category={address} value="street"/>, <TextSpace category={address} value="city" /><br></br>
            <TextSpace category={address} value="state" /> <TextSpace category={address} value="zip" />, <TextSpace category={address} value="country" /></p>
          </div>
        </div>
        <div className="hidden 2xl:block border-l-2 px-2">
          <p className="text-small align-baseline">
            Type: <span className="font-light">{accom.accomType || "-"}</span>
          </p>
          <p>
            Phone Number: <span className="font-light">{accom.accomPhoneNumber || "-"}</span>
          </p>
          <p>
            Email:{" "}
            <a
              type="email"
              href={`mailto:${accom.accomEmail}`}
              className="font-light hover:text-blue-500"
            >
              {accom.accomEmail || "-"}
            </a>
          </p>
          <p>
            Confirmation:{" "}
            <span className="font-light">{accom.accomResNum || "-"}</span>
          </p>
        </div>
      </CardBody>
    </Card>
    </>
  );
}
