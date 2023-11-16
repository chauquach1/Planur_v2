import { Card, CardBody } from "@nextui-org/react";
import { format } from "date-fns";

export default function AccommodationsCard({ data }) {
  const checkInDate = format(new Date(data.accomCheckIn), "PP");
  const checkOutDate = format(new Date(data.accomCheckOut), "PP");

  return (
    <Card className="w-[400px] my-1 border shadow-md">
      <CardBody>
        <div className="flex flex-col">
          <div className="row flex flex-row flex-wrap justify-between items-baseline">
            <p className="text-md inline-block align-baseline">
              {data.accomName}
            </p>
          </div>
          <p className="text-small text-default-500">
            {checkInDate} - {checkOutDate}
          </p>
          <p className="text-small text-default-500 align-baseline">
            {data.accomType}
          </p>
        </div>
      </CardBody>
    </Card>
  );
}
