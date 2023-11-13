import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
} from "@nextui-org/react";

export default function AccommodationsCard({ accomId }) {
  // console.log('accommodation details',accomId);

  return (
    <>
      <Card className="w-[400px] my-1 border shadow-md">
        <CardBody>
          <div className="flex flex-col">
            <div className="row flex flex-row flex-wrap justify-between items-baseline">
              <p className="text-md inline-block align-baseline">
                {/* {accommodation.accomName} */}
              </p>
            </div>
            <p className="text-small text-default-500">
              {/* {accommodation.accomCheckIn} - {accommodation.accomCheckOut} */}
            </p>
            <p className="text-small text-default-500 align-baseline">
              {/* {accommodation.accomType} */}
            </p>
          </div>
        </CardBody>
      </Card>
    </>
  );
}
