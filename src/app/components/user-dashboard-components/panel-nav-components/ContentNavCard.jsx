'use client';
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/react";
import {calendarDateFormat} from "../../../_utils/dateFormatterIndex";
import { useState } from "react";
export default function ContentNavCard({ trip, setSelectedTrip }) {
  
  const tripStartDate = calendarDateFormat(trip.tripStartDate);
  const tripEndDate = calendarDateFormat(trip.tripEndDate);

  return (
    <Card
      id="content-nav-card"
      className="my-3 bg-bismark-300 w-full max-w-xs mx-auto shadow-md 
      hover:bg-peach-200 active:bg-peach-200 focus:outline-none focus:bg-peach-300"
      isPressable
      onPress={() => setSelectedTrip(trip)}
    >
      <CardHeader className="pb-0">
        <h1 className="font-semibold text-lg">{trip.tripName}</h1>
      </CardHeader>
      <CardBody className="flex-col text-sm flex-wrap sm:flex-row lg:flex-nowrap justify-between gap-1 px-3 pt-1">
        <div className="">
          <h1>{tripStartDate}</h1>{" "}
        </div>
        <div className="w-full lg:w-1/2">
          <h1>{tripEndDate}</h1>
        </div>
      </CardBody>
    </Card>
  );
}
