import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";

export default function PreviewCard({ title, description }) {
  return (
    <div
      id="preview-container"
      className="flex flex-row sm:flex-col lg:w-1/4 max-w-[240px]"
    >
      <Card className="py-4 w-[240px] h-[240px]">
        <CardBody className="overflow-visible py-2">
          <Image
            alt="Card background"
            className="object-cover rounded-xl"
            src="/images/hero-card-complete.jpeg"
            width={270}
          />
        </CardBody>
        <CardFooter className="flex sm:hidden pb-0 pt-2 px-4 flex-col">
          <h4 className="font-bold text-md">{title}</h4>
          <small className="text-default-500">{description}</small>
        </CardFooter>
      </Card>
      <div id="preview-detail-container" className="hidden sm:block p-2">
        <h4 className="font-bold text-md">{title}</h4>
        <small className="text-default-500">{description}</small>
      </div>
    </div>
  );
}