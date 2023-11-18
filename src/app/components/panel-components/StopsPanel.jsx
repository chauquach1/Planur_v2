import { format } from "date-fns";

export default function StopsPanel({currCardData}) {
  const data = currCardData;
  const arrival = format(new Date(data.stopArrival), "PP");
  const departure = format(new Date(data.stopDeparture), "PP");
  return (
    <>
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
      <p className="text-xl">StopId: {data._id} </p>
    </>
  );
}
