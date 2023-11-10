import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
} from "@nextui-org/react";

export default function AccommodationsCard({ accommodation }) {
  // console.log(accommodation);

  return (
    <>
      <Card className="w-[400px] my-1 border shadow-md">
        <CardBody>
          <div className="flex flex-col">
            <div className="row flex flex-row flex-wrap justify-between items-baseline">
              <p className="text-md inline-block align-baseline">
                {accommodation.name}
              </p>
            </div>
            <p className="text-small text-default-500">
              {accommodation.checkIn} - {accommodation.checkOut}
            </p>
            <p className="text-small text-default-500 align-baseline">
              {accommodation.type}
            </p>
          </div>
        </CardBody>
      </Card>
    </>
  );
}
