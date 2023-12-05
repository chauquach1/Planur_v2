import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import TravelSmart from "../../assets/travelsmart.svg";
import Checklist from "../../assets/checklist.svg";
import Dashboard from "../../assets/dashboard.svg";
import LocationSearch from "../../assets/locationsearch.svg";

export default function PreviewCard({ title, description, imgSrc }) {
  return (
    <div
      id="preview-container"
      className="flex flex-row sm:flex-col lg:w-1/4 max-w-[240px] mx-auto"
    >
      <Card className="py-4 w-[240px] h-[240px]">
        <CardBody className="overflow-visible py-2">
          {/* <Image
            alt="Card background"
            className="object-cover rounded-xl"
            src={imgSrc}
            width={270}
            height={270}
          /> */}
          {/* <Image
            className="object-cover rounded-xl"
            src={Checklist}
            width={200}
            height={200}
            alt="TravelSmart"
          /> */}
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