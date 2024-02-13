'use client';
import React from "react";
import { format, parseISO } from 'date-fns';
import {calendarDateFormat} from "../../../_utils/calendarDateFormat";
import {Card, CardHeader, CardBody, CardFooter, Divider, Link} from "@nextui-org/react";

export default function TripDisplay({ trip }) {
  const tripStartDate = calendarDateFormat(trip.tripStartDate);
  const tripEndDate = calendarDateFormat(trip.tripEndDate);

  return (
    <div id={trip._id.oid} className="max-w-[400px] max-h-40">
        <div className="flex flex-col">
          <p className="text-md">{trip.tripName}</p>
        </div>
        <p>
          {tripStartDate} - {tripEndDate}
        </p>
        <Link isExternal showAnchorIcon href={`/trip/${trip._id.oid}`}>
          Edit / View
        </Link>
    </div>
  );
}