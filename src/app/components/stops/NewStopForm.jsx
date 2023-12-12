"use client";
import { useState } from "react";
import { NextResponse } from "next/server";
import SelectStopType from "../form-components/SelectStopType";
import SelectStopInterest from "../form-components/SelectStopInterest";
import { Button } from "@nextui-org/react";
import Input from "../form-components/Input";

export default function NewStopForm() {
  const [stopName, setStopName] = useState("");
  const [stopType, setStopType] = useState("");
  const [stopArrival, setStopArrival] = useState("");
  const [stopDeparture, setStopDeparture] = useState("");
  const [stopTransportation, setStopTransportation] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [country, setCountry] = useState("");
  const [stopInterest, setStopInterest] = useState("");
  const [stopResNum, setStopResNum] = useState("");
  const [stopPhoneNumber, setStopPhoneNumber] = useState("");
  const [stopEmail, setStopEmail] = useState("");
  const [stopNotes, setStopNotes] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setMessage("");

    // Construct the form data object
    const stopDetails = {
      uuid,
      tripId,
      stopName,
      stopType,
      stopArrival,
      stopDeparture,
      stopTransportation,
      stopAddress: {
        street,
        city,
        state,
        zip,
        country,
      },
      stopInterest,
      stopResNum,
      stopNotes,
      stopPhoneNumber,
      stopEmail,
    };

    try {
      // Send the form data to the API
      const createStop = await fetch("https://planur-v2.vercel.app/api/stops", {
        method: "POST",
        body: JSON.stringify(stopDetails),
        headers: {
          "Content-Type": "application/json",
        },
      });

      // Process the response here
      const result = await createStop.json();

      // Reset form fields
      setStopName("");
      setStopType("");
      setStopInterest("");
      setStopArrival("");
      setStopDeparture("");
      setStopPhoneNumber("");
      setStopEmail("");
      setStreet("");
      setCity("");
      setState("");
      setZip("");
      setCountry("");
      setStopTransportation("");
      setStopResNum("");
      setStopNotes("");
      getTripStops();
      return new NextResponse(200, result);
    } catch (error) {}
  };

  return (
    <>
      <h1 className="text-center my-3">Add New Stop</h1>
      <div className="h-full overflow-y-scroll p-3 pt-0">
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <Input
            autoFocus={true}
            label="Stop Name"
            placeholder="e.g Golden Gate Bridge"
            value={stopName}
            onChange={(e) => setStopName(e.target.value)}
            isRequired
          />
          <div className="flex flex-row flex-wrap xl:flex-nowrap gap-3">
            <SelectStopType setStopType={setStopType} />
            <SelectStopInterest setStopInterest={setStopInterest} />
          </div>
          <div className="flex flex-row flex-wrap xl:flex-nowrap gap-3">
            <Input
              label="Arrival Date"
              type="date"
              placeholder="mm/dd/yyyy"
              value={stopArrival}
              onChange={(e) => setStopArrival(e.target.value)}
              isRequired
            />
            <Input
              label="Departure Date"
              type="date"
              placeholder="mm/dd/yyyy"
              value={stopDeparture}
              onChange={(e) => setStopDeparture(e.target.value)}
              isRequired
            />
          </div>
          <Input
            label="Transportation"
            placeholder="Car, Plane, Train, etc."
            value={stopTransportation}
            onChange={(e) => setStopTransportation(e.target.value)}
          />
          <div className="flex flex-col lg:grid lg:grid-cols-6 md:grid-rows-2 gap-3">
            <Input
              label="Street"
              placeholder="e.g 123 Main St"
              value={street}
              onChange={(e) => setStreet(e.target.value)}
              autoComplete="off"
              className="col-span-3" 
            />
            <Input
              label="City"
              placeholder="e.g San Francisco"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              autoComplete="off"
              className="col-span-3" 
            />
            <Input
              label="State/Province"
              value={state}
              onChange={(e) => setState(e.target.value)}
              autoComplete="off"
              className="col-span-2" 
            />
            <Input
              label="Zip/Postal Code"
              value={zip}
              onChange={(e) => setZip(e.target.value)}
              autoComplete="off"
              className="col-span-2 " 
            />
            <Input
              label="Country/Region"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              autoComplete="off"
              className="col-span-2" 
            />
          </div>
          <Input
            label="Email"
            value={stopEmail}
            onChange={(e) => setStopEmail(e.target.value)}
            autoComplete="off"
          />
          <Input
            label="Reservation/Confirmation"
            value={stopResNum}
            placeholder="e.g 1234567890"
            onChange={(e) => setStopResNum(e.target.value)}
            autoComplete="off"
          />
          <Input
            label="Phone Number"
            value={stopPhoneNumber}
            onChange={(e) => setStopPhoneNumber(e.target.value)}
            autoComplete="off"
          />
          <Input
            onChange={(e) => setStopNotes(e.target.value)}
            autoComplete="off"
            maxRows={3}
            value={stopNotes}
            label="Notes"
          ></Input>

          <Button
            size="md"
            type="submit"
            disabled={isSubmitting}
            color="primary"
            onPress={handleSubmit}
          >
            Add Stop
          </Button>
        </form>
      </div>
    </>
  );
}
