import { Button, Input } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { format } from "date-fns";

export default function AccomsPanel({ currCardData }) {
  const data = currCardData;

  const checkInDate = format(new Date(data.accomCheckIn), "PP");
  const checkOutDate = format(new Date(data.accomCheckOut), "PP");

  return (
    <>
      <h1 className="text-5xl">{data.accomName}</h1>
      <p className="text-3xl">
        {checkInDate} - {checkOutDate}
      </p>
      <p className="text-3xl">{data.accomAddress.street}</p>
      <p className="text-3xl">
        {data.accomAddress.city}, {data.accomAddress.state}{" "}
        {data.accomAddress.zip}
      </p>
      <p className="text-3xl">{data.accomAddress.country}</p>
      <p className="text-3xl">Phone Number: {data.accomPhoneNumber}</p>
      <p className="text-3xl">Email: {data.accomEmail}</p>
      <p className="text-3xl">Confirmation Number: {data.accomResNum}</p>
      <p className="text-3xl">Type: {data.accomType}</p>
      <p className="text-xl">AccomId: {data._id}</p>
    </>
  );
}
