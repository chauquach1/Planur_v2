import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@nextui-org/react";

export default function AccommodationsCard({accommodation}) {

  console.log(accommodation);
  
  
  return (
    <Card className="max-w-[400px]">
      <CardHeader className="flex gap-3">
        <div className="flex flex-col">
          <p className="text-md">{accommodation.name}</p>
          <p className="text-small text-default-500">{accommodation.type}</p>
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        <p>Make beautiful websites regardless of your design experience.</p>
      </CardBody>
      <Divider />
      <CardFooter></CardFooter>
    </Card>
  )
}
