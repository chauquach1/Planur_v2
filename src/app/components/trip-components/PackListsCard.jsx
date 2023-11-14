import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
} from "@nextui-org/react";

export default function PackListsCard(key={key},{ stop }) {
  return (
    <>
      <Card className="w-[400px] border my-1 shadow-lg">
        <CardBody>
          <div className="flex flex-col">
            <div className="row flex flex-row flex-wrap justify-between items-baseline">
              <p className="text-md inline-block align-baseline">
                {stop.stopName}
              </p>
              <p className="text-small inline-block text-default-500 align-baseline">
                {stop.type}
              </p>
              <p className="text-small text-default-500">
                {stop.arrival} {stop.departure ? ` - ${stop.departure}` : null}
              </p>
            </div>
            <p className="text-small text-default-500">{stop.address}</p>
          </div>
        </CardBody>
      </Card>
    </>
  );
}
