import { MdLocationPin } from "react-icons/md";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/react";
import {calendarDateFormat} from "../../_utils/dateFormatterIndex";
import AddressText from "../misc-components/AddressText"
import { deleteStop } from "../../_utils/stopsRequestsIndex";
import { useState, useEffect, useRef } from "react";

export default function StopCard({ fetchedStop, displayProps, tripProps, requestProps, stopProps, ...props }) {
  const [stop, setStop] = useState(fetchedStop);
  let address = stop.stopAddress;
  const arrival = calendarDateFormat(stop.stopArrival);
  const departure = calendarDateFormat(stop.stopDeparture);

  const updateStop =() => {
    requestProps.setRequestType("PUT");
    stopProps.setActiveStop(stop);
    stopProps.setShowStopForm(true);
  }

  const handleDeleteStop = (deleteId) => {
    // Use filter to return a new array excluding the item with the matching stopId
    const updatedStopsIndex = stopProps.stopsIndex.filter(stop => stop._id !== deleteId);
    console.log('updatedStopsIndex', updatedStopsIndex);
    stopProps.setStopsIndex(updatedStopsIndex);
    deleteStop(deleteId);
  };
  
    useEffect(() => {
      setStop(fetchedStop);
    }, [fetchedStop]);

  return (
    <Card className=" w-full border shadow-none bg-white ">
      <CardHeader className="row flex flex-row w-full flex-wrap justify-between lg:justify-start text-lg pb-0">
        <div className="flex flex-row items-center gap-2 me-4 min-w-[280px] max-w-[400px]">
          <MdLocationPin />
          <p className="inline-block">{stop.stopName}</p>
        </div>
        <div className="ms-auto text-sm">
          {/* New form rendering buttons: */}
          <button onClick={updateStop}>Edit</button> |{" "}
          <button onClick={() => handleDeleteStop(stop._id)}>Delete</button>
        </div>
      </CardHeader>
      <CardBody className="flex flex-col justify-start text-sm pt-0 gap-2">
        <div className="flex flex-col 2xl:flex-row gap-2">
          <div className="border-l-2 px-2">
            <p className="text-default-500 ms-auto">Arrival: {arrival}</p>
            {departure ? (
              <p className="text-default-500 ms-auto">
                {" "}
                Departure: {departure}{" "}
              </p>
            ) : null}
          </div>
          <div className="border-l-2 px-2 min-w-[250px] font-light inline-flex  gap-2">
            <p>
              <AddressText category={address} value="street" />,{" "}
              <AddressText category={address} value="city" />
              <br></br>
              <AddressText category={address} value="state" />{" "}
              <AddressText category={address} value="zip" />,{" "}
              <AddressText category={address} value="country" />
            </p>
          </div>
        </div>
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
