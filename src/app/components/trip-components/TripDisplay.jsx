'use client';
import React from "react";
import { format, parseISO } from 'date-fns';
import normalDateFormat from "../../_utils/normalDateFormat";
import {Card, CardHeader, CardBody, CardFooter, Divider, Link} from "@nextui-org/react";

export default function TripDisplay({ trip }) {
  const tripStartDate = normalDateFormat(trip.tripStartDate);
  const tripEndDate = normalDateFormat(trip.tripEndDate);

  return (
    <Card id={trip._id.oid} className="max-w-[400px] max-h-40">
      <CardHeader className="flex gap-3 font-bold">
        <div className="flex flex-col">
          <p className="text-md">{trip.tripName}</p>
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        <p>
          {tripStartDate} - {tripEndDate}
        </p>
      </CardBody>
      <Divider />
      <CardFooter className="justify-end">
        <Link isExternal showAnchorIcon href={`/trip/${trip._id.oid}`}>
          Edit / View
        </Link>
      </CardFooter>
    </Card>
  );
}