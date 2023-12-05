import { Card, CardHeader, CardFooter } from "@nextui-org/react";
import Image from "next/image";

export default function PreviewCard({ title, description, imgSrc }) {
  return (
    <div
      id="preview-container"
      className="flex flex-row gap-2 sm:flex-col lg:w-1/4 sm:max-w-[240px] mx-auto"
    >
      <div id="preview-detail-container" className="hidden sm:block">
        <h4 className="font-bold text-md">{title}</h4>
      </div>
      <Card className="bg-none sm:bg-transparent max-w-[240px] sm:h-[240px]">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src={imgSrc}
          width={270}
          height={270}
        />
        <CardFooter className="hidden sm:hidden py-0 px-4 flex-col">
          <h4 className="font-bold text-md">{title}</h4>
          <small className="text-default-500">{description}</small>
        </CardFooter>
      </Card>
      <div id="preview-detail-container" className="hidden sm:block px-2">
        <small className="text-default-500">{description}</small>
      </div>
      <div id="preview-detail-container" className="block w-2/3 sm:hidden p-0">
        <h4 className="font-bold text-md">{title}</h4>
        <small className="text-default-500">{description}</small>
      </div>
    </div>
  );
}
