import React from "react";
import { format, parseISO } from 'date-fns';
import {Card, CardHeader, CardBody, CardFooter, Divider, Link} from "@nextui-org/react";

export default function TripIndexCard({tripId, tripName, tripStartDate, tripEndDate }) {
  // Convert the date strings into Date objects
  const formattedStartDate = format(parseISO(tripStartDate), 'PP');
  const formattedEndDate = format(parseISO(tripEndDate), 'PP');

  return (
    <Card className="max-w-[400px] max-h-40">
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