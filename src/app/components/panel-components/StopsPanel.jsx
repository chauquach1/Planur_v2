import { format } from "date-fns";
import { Button } from "@nextui-org/react";

export default function StopsPanel({ currCardData, getTripStops, tripId }) {
  const data = currCardData;
  const arrival = format(new Date(data.stopArrival), "PP");
  const departure = format(new Date(data.stopDeparture), "PP");
  
  const handleDelete = async () => {
    const stopId = data._id;
    console.log(stopId);
    try {
      const response = await fetch(
        `http://localhost:3000/api/stops?stopId=${stopId}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.ok) {
        throw new Error(data.message || "Something went wrong!");
      }
      getTripStops();
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="container w-full  h-full justify-self-send p-6 shadow-2xl rounded-xl text-black bg-white/60">
      <form className="flex flex-col h-full w-full" onSubmit={handleDelete}>
        <div
          id="accordion-container"
          className="grow bg-white/60 rounded-xl overflow-scroll "
        >
          <div
            id="accordion-container"
            className="grow rounded-xl overflow-scroll p-2"
          >
            <h1 className="text-5xl">{data.stopName}</h1>
            <p className="text-3xl">
              {arrival} - {departure}
            </p>
            <p className="text-3xl">{data.stopAddress.street}</p>
            <p className="text-3xl">
              {data.stopAddress.city}, {data.stopAddress.state}{" "}
              {data.stopAddress.zip}
            </p>
            <p className="text-3xl">{data.stopAddress.country}</p>
            <p className="text-3xl">Phone Number: {data.stopPhoneNumber}</p>
            <p className="text-3xl">Email: {data.stopEmail}</p>
            <p className="text-3xl">Confirmation Number: {data.stopResNum}</p>
            <p className="text-3xl">Type: {data.stopType}</p>
          </div>
        </div>
        <div
          id="submit-btn-container"
          className="flex flex-row justify-end mt-2 w-full"
        >
          <Button
            size="sm"
            variant= "flat"
            color="danger"
            onPress={handleDelete}
          >
            Delete
          </Button>
        </div>
      </form>
    </div>
  );
}
