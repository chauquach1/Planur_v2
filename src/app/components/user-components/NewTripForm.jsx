"use client";
import { useState } from "react";
import { Button, Input } from "@nextui-org/react";

export default function NewTripForm() {
  const [tripName, setTripName] = useState("");
  const [destination, setDestination] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [guests, setGuests] = useState("");
  const [reason, setReason] = useState("");
  const [transportation, setTransportation] = useState("");
  const [accommodation, setAccommodation] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('form submit clicked: ',tripName, destination, startDate, endDate, guests, reason, transportation, accommodation, address);
  };

  return (
    <>
      <div className=" md:4/5 lg:w-2/3 flex flex-row flex-wrap gap-2 items-center justify-center">
        <div className="row w-full flex flex-row gap-2 flex-wrap md:flex-nowrap justify-between">
          <Input
            label="Trip Name"
            placeholder="ex. Mexico 2023"
            value={tripName}
            onChange={(event) => setTripName(event.target.value)}
            required
            size="sm"
            className="md:w-1/2"
            autoComplete="off"
            isRequired
          />
          <Input
            label="Destination"
            placeholder="ex. Tijuana"
            value={destination}
            onChange={(event) => setDestination(event.target.value)}
            required
            size="sm"
            className="md:w-1/2"
          />
        </div>
        <div className="row w-full flex flex-row gap-2 justify-between">
          <Input
            label="Arrival"
            type="date"
            placeholder="mm/dd/yyyy"
            value={startDate}
            onChange={(event) => setStartDate(event.target.value)}
            required
            size="sm"
            isRequired
          />
          <Input
            label="Departure"
            type="date"
            placeholder="mm/dd/yyyy"
            value={endDate}
            onChange={(event) => setEndDate(event.target.value)}
            required
            size="sm"
            isRequired
          />
        </div>
        <div className="row w-full flex flex-row gap-2 justify-between">
          <Input
            label="Reason"
            placeholder=""
            value={reason}
            onChange={(event) => setReason(event.target.value)}
            required
            size="sm"
          />
          <Input
            label="Travelers"
            placeholder=""
            value={guests}
            onChange={(event) => setGuests(event.target.value)}
            required
            size="sm"
          />
        </div>
        <div className="row w-full flex flex-row gap-2 justify-between">
          <Input
            label="Transportation"
            placeholder=""
            value={transportation}
            onChange={(event) => setTransportation(event.target.value)}
            required
            size="sm"
          />
        </div>
        <div className="row w-full flex flex-row gap-2 justify-between">
          <Input
            label="Accommodation"
            placeholder=""
            value={accommodation}
            onChange={(event) => setAccommodation(event.target.value)}
            required
            size="sm"
          />
          <Input
            label="Address"
            placeholder=""
            value={address}
            onChange={(event) => setAddress(event.target.value)}
            required
            size="sm"
          />
        </div>
        <div>
          <Button variant="success" onClick={handleSubmit} fullWidth>
            Generate Itinerary
          </Button>
        </div>
      </div>
    </>
  );
}
