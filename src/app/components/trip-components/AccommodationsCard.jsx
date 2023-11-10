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
  console.log(accommodation);

  return (
    <>
      <Card className="max-w-[400px] min-w-[350px] my-1">
        <CardHeader>
          <div className="flex flex-col">
            <p className="text-md">{accommodation.name}</p>
            <p className="text-small text-default-500">{accommodation.type}</p>
          </div>
        </CardHeader>
        <Divider />
        <CardBody>
          <p className="text-small text-default-500">
            {accommodation.checkIn} - {accommodation.checkOut}
          </p>
        </CardBody>
      </Card>
      <Card className="max-w-[400px] min-w-[350px] my-1">
        <CardHeader>
          <div className="flex flex-col">
            <p className="text-md">{accommodation.name}</p>
            <p className="text-small text-default-500">{accommodation.type}</p>
          </div>
        </CardHeader>
        <Divider />
        <CardBody>
          <p className="text-small text-default-500">
            {accommodation.checkIn} - {accommodation.checkOut}
          </p>
        </CardBody>
      </Card>
      <Card className="max-w-[400px] min-w-[350px] my-1">
        <CardHeader>
          <div className="flex flex-col">
            <p className="text-md">{accommodation.name}</p>
            <p className="text-small text-default-500">{accommodation.type}</p>
          </div>
        </CardHeader>
        <Divider />
        <CardBody>
          <p className="text-small text-default-500">
            {accommodation.checkIn} - {accommodation.checkOut}
          </p>
        </CardBody>
      </Card>
      <Card className="max-w-[400px] min-w-[350px] my-1">
        <CardHeader>
          <div className="flex flex-col">
            <p className="text-md">{accommodation.name}</p>
            <p className="text-small text-default-500">{accommodation.type}</p>
          </div>
        </CardHeader>
        <Divider />
        <CardBody>
          <p className="text-small text-default-500">
            {accommodation.checkIn} - {accommodation.checkOut}
          </p>
        </CardBody>
      </Card>
    </>
  );
}
