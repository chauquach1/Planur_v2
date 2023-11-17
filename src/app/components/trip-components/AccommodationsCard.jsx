import { Card, CardBody } from "@nextui-org/react";
import { format } from "date-fns";

export default function AccommodationsCard({
  data,
  panelType,
  currCardData,
  currCardType,
  prevCardData,
  prevCardType,
  handleCardPress,
}) {
  const checkInDate = format(new Date(data.accomCheckIn), "PP");
  const checkOutDate = format(new Date(data.accomCheckOut), "PP");

  return (
    <Card
      isHoverable
      isPressable
      isBlurred
      className="data-[hover=true]:bg-content2 dark:data-[hover=true]:bg-content2 w-full max-w-xs sm:max-w-[300px] md:max-w-[400px] border my-1 shadow-lg bg-background/60 dark:bg-default-100/50"
      onPress={() =>
        handleCardPress(data, "accommodations", prevCardData, prevCardType)
      }
    >
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
