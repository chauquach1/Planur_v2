"use client";
import { Button, Input } from "@nextui-org/react";
import AccomInput from "./AccomInputField";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function NewAccomsForm({ uuid, tripId, getAccoms }) {
  const [accomName, setAccomName] = useState("");
  const [accomType, setAccomType] = useState("");
  const [accomCheckIn, setAccomCheckIn] = useState("");
  const [accomCheckOut, setAccomCheckOut] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [country, setCountry] = useState("");
  const [accomPhoneNumber, setAccomPhoneNumber] = useState("");
  const [accomEmail, setAccomEmail] = useState("");
  const [accomResNum, setAccomResNum] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setMessage("");

    // Construct the form data object
    const accomDetails = {
      uuid,
      tripId,
      accomName,
      accomType,
      accomCheckIn,
      accomCheckOut,
      accomAddress: {
        street,
        city,
        state,
        zip,
        country,
      },
      accomPhoneNumber,
      accomEmail,
      accomResNum,
    };
    // console.log(accomDetails);

    try {
      // Send the form data to the serverless function
      const response = await fetch(
        "https://planur-v2.vercel.app/api/accommodations",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(accomDetails),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      getAccoms();
      // Reset form fields
      setAccomName("");
      setAccomType("");
      setAccomCheckIn("");
      setAccomCheckOut("");
      setStreet("");
      setCity("");
      setState("");
      setZip("");
      setCountry("");
      setAccomPhoneNumber("");
      setAccomEmail("");
      setAccomResNum("");
    } catch (error) {
      setMessage("Failed to create accommodation: " + error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div id="accoms-form" className="flex flex-col gap-3">
        <AccomInput
          autoFocus={true}
          label="Accommodation Name"
          placeholder=" "
          isRequired
          value={accomName}
          onChange={(event) => setAccomName(event.target.value)}
        />
        {/* <SelectAccom className="col-span-3" setAccomType={setAccomType} /> */}
        <AccomInput
          label="Check-In Date"
          type="date"
          placeholder="mm/dd/yyyy"
          value={accomCheckIn}
          onChange={(event) => setAccomCheckIn(event.target.value)}
          isRequired
          autoComplete="off"
          variant="faded"
        />
        <AccomInput
          label="Check-Out Date"
          type="date"
          placeholder="mm/dd/yyyy"
          value={accomCheckOut}
          onChange={(event) => setAccomCheckOut(event.target.value)}
          isRequired
          autoComplete="off"
          variant="faded"
        />
        <AccomInput
          label="Reservation Number"
          placeholder=" "
          value={accomResNum}
          onChange={(event) => setAccomResNum(event.target.value)}
          autoComplete="off"
          variant="faded"
        />
        <AccomInput
          label="Street"
          placeholder=" "
          value={street}
          onChange={(event) => setStreet(event.target.value)}
          autoComplete="off"
          variant="faded"
          size="sm"
        />
        <AccomInput
          label="City"
          placeholder=" "
          value={city}
          onChange={(event) => setCity(event.target.value)}
          autoComplete="off"
          variant="faded"
          size="sm"
        />
        <AccomInput
          label="State/Province"
          placeholder=" "
          value={state}
          onChange={(event) => setState(event.target.value)}
          autoComplete="off"
          variant="faded"
          size="sm"
        />
        <AccomInput
          label="Zip/Postal Code"
          value={zip}
          onChange={(event) => setZip(event.target.value)}
          autoComplete="off"
          variant="faded"
          size="sm"
        />
        <AccomInput
          label="Country/Region"
          value={country}
          onChange={(event) => setCountry(event.target.value)}
          autoComplete="off"
          variant="faded"
          size="sm"
        />
        <AccomInput
          label="Phone Number"
          value={accomPhoneNumber}
          onChange={(event) => setAccomPhoneNumber(event.target.value)}
          autoComplete="off"
          variant="faded"
          size="sm"
        />
        <AccomInput
          label="Email"
          value={accomEmail}
          onChange={(event) => setAccomEmail(event.target.value)}
          autoComplete="off"
          variant="faded"
          size="sm"
        />
        <div className="row w-full flex flex-row gap-2 justify-between">
          <div>
            <Button
              color="success"
              radius="full"
              className="text-white"
              type="submit"
              disabled={isSubmitting}
              fullWidth
            >
              Add Accommodation
            </Button>
          </div>
        </div>
      </div>
    </form>
  );
}
