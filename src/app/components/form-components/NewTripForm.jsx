"use client";
import { useState } from "react";
import { Button, Input } from "@nextui-org/react";
import SelectReason from "../form-components/SelectReason";

export default function NewTripForm({ user }) {
  const [tripName, setTripName] = useState("");
  const [destination, setDestination] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [guests, setGuests] = useState("");
  const [reason, setReason] = useState("");
  const [transportation, setTransportation] = useState("");
  const [accommodation, setAccommodation] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setMessage('');

    // Construct the form data object
    const tripDetails = {
      user,
      startDate, // JavaScript Date object
      endDate, // Timezone offset in minutes
      tripName,
      destination,
      guests,
      reason,
      transportation,
      accommodation,
    };
    try {
      const response = await fetch("http://localhost:3000/api/trip", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(tripDetails),
      });

      if (!response.ok) {
        // console.log(response);
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();

      // Process the response here
      setMessage('Trip successfully created!');
      
      // Reset form fields
      setTripName('');
      setDestination('');
      setStartDate('');
      setEndDate('');
      setGuests('');
      setReason('');
      setTransportation('');
      setAccommodation('');
      
    } catch (error) {
      setMessage('Failed to create trip: ' + error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="max-w-xl flex flex-row flex-wrap gap-2 items-center justify-center bg-white p-4 rounded-xl"
      >
        <div className="row w-full flex flex-row gap-2 flex-wrap md:flex-nowrap justify-between">
          <Input
            label="Trip Name"
            placeholder="ex. Japan 2023"
            value={tripName}
            onChange={(event) => setTripName(event.target.value)}
            size="sm"
            className="md:w-1/2"
            autoComplete="off"
            isRequired
          />
          <Input
            label="Destination"
            placeholder="ex. Tokyo"
            value={destination}
            onChange={(event) => setDestination(event.target.value)}
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
            size="sm"
            isRequired
          />
          <Input
            label="Departure"
            type="date"
            placeholder="mm/dd/yyyy"
            value={endDate}
            onChange={(event) => setEndDate(event.target.value)}
            size="sm"
            isRequired
          />
        </div>
        <div className="row w-full flex flex-row gap-2 justify-between">
          <SelectReason setReason={setReason}/>
          <Input
            label="Travelers"
            placeholder=""
            value={guests}
            onChange={(event) => setGuests(event.target.value)}
            size="sm"
          />
        </div>
        <div className="row w-full flex flex-row gap-2 justify-between">
          <Input
            label="Transportation"
            placeholder=""
            value={transportation}
            onChange={(event) => setTransportation(event.target.value)}
            size="sm"
          />
          <Input
            label="Accommodation"
            placeholder=""
            value={accommodation}
            onChange={(event) => setAccommodation(event.target.value)}
            size="sm"
          />
        </div>
        <div>
          <Button
            color="success"
            radius="full"
            className="text-white"
            type="submit"
            disabled={isSubmitting}
            fullWidth
          >
            Generate Itinerary
          </Button>
        </div>
      </form>
    </>
  );
}
