import { Button, Input } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { format } from "date-fns";

export default function AccomsPanel({ currCardData, getAccoms }) {
  const data = currCardData;

  const checkInDate = format(new Date(data.accomCheckIn), "PP");
  const checkOutDate = format(new Date(data.accomCheckOut), "PP");

  const handleDelete = async () => {
    const accomId = data._id;
    // console.log(accomId);
    try {
      const response = await fetch(
        `https://planur-v2.vercel.app/api/accommodations?accomId=${accomId}`,
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
      getAccoms();
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
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
              <h1 className="text-5xl">{data.accomName}</h1>
              <p className="text-3xl">
                {checkInDate} - {checkOutDate}
              </p>
              <p className="text-3xl">{data.accomAddress.street}</p>
              <p className="text-3xl">
                {data.accomAddress.city}, {data.accomAddress.state}{" "}
                {data.accomAddress.zip}
              </p>
              <p className="text-3xl">{data.accomAddress.country}</p>
              <p className="text-3xl">Phone Number: {data.accomPhoneNumber}</p>
              <p className="text-3xl">Email: {data.accomEmail}</p>
              <p className="text-3xl">
                Confirmation Number: {data.accomResNum}
              </p>
              <p className="text-3xl">Type: {data.accomType}</p>
            </div>
          </div>
          <div
            id="submit-btn-container"
            className="flex flex-row justify-end mt-2 w-full"
          >
            <Button
              size="sm"
              variant="flat"
              color="danger"
              onPress={handleDelete}
            >
              Delete
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}
