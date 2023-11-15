import React from "react";
import { format, parse } from 'date-fns';
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@nextui-org/react";

export default function TripIndexCard({tripId, tripName, tripStartDate, tripEndDate }) {
  // Convert the date strings into Date objects
  const startDateObj = (tripStartDate);
  const endDateObj = (tripEndDate);

  // Format the dates without time
  const formattedStartDate = format(startDateObj, 'PP'); // 'PP' is a format for 'Dec 31, 2023'
  const formattedEndDate = format(endDateObj, 'PP');

  return (
    <Card className="max-w-[400px]">
      <CardHeader className="flex gap-3 font-bold">
        <div className="flex flex-col">
          <p className="text-md">{tripName}</p>
        </div>
      </CardHeader>
      <Divider/>
      <CardBody>
        <p>{formattedStartDate} - {formattedEndDate}</p>
      </CardBody>
      <Divider/>
      <CardFooter className="justify-end">
        <Link
          isExternal
          showAnchorIcon
          href={`/trip/${tripId}`}
        >
          Edit / View
        </Link>
      </CardFooter>
    </Card>
  );
}