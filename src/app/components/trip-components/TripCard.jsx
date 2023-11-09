import React from "react";
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@nextui-org/react";

export default function TripIndexCard({uuid, tripId}) {
  return (
    <Card className="max-w-[400px]">
      <CardHeader className="flex gap-3 font-bold">
        <div className="flex flex-col">
          <p className="text-md">Trip {tripId}</p>
        </div>
      </CardHeader>
      <Divider/>
      <CardBody>
        <p>MM/DD/YYY - MM/DD/YYYY</p>
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