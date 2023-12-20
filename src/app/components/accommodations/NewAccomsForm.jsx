"use client";
import { Button } from "@nextui-org/react";
import Input from "../form-components/Input";
import SelectAccom from "../form-components/SelectAccom";
import { useState } from "react";

export default function NewAccomsForm({ uuid, tripId, getAccoms, activeForm }) {
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
    <>
      {/* <h1 className="text-center my-3">Add New Accommodation</h1> */}
      <div
        className={`${
          activeForm === "accommodation" ? "block" : "hidden"
        } h-full overflow-y-scroll`}
      >
        <form onSubmit={handleSubmit} className="flex flex-col gap-2">
          <div className="flex flex-row flex-wrap xl:flex-nowrap gap-3">
            <Input
              autoFocus={true}
              label="Accommodation"
              placeholder="Name"
              isRequired
              value={accomName}
              onChange={(event) => setAccomName(event.target.value)}
            />
            <SelectAccom className="col-span-3" setAccomType={setAccomType} />
          </div>
          <Input
            label="Check-In Date"
            type="date"
            placeholder="mm/dd/yyyy"
            value={accomCheckIn}
            onChange={(event) => setAccomCheckIn(event.target.value)}
            isRequired
          />
          <Input
            label="Check-Out Date"
            type="date"
            placeholder="mm/dd/yyyy"
            value={accomCheckOut}
            onChange={(event) => setAccomCheckOut(event.target.value)}
            isRequired
          />
          <div className="flex flex-row flex-wrap xl:flex-nowrap gap-3">
            <Input
              label="Phone"
              value={accomPhoneNumber}
              onChange={(event) => setAccomPhoneNumber(event.target.value)}
            />
            <Input
              label="Email"
              value={accomEmail}
              onChange={(event) => setAccomEmail(event.target.value)}
            />
          </div>
          <Input
            label="Reservation Number"
            placeholder=" "
            value={accomResNum}
            onChange={(event) => setAccomResNum(event.target.value)}
          />
          <Input
            label="Street"
            value={street}
            onChange={(event) => setStreet(event.target.value)}
          />
          <Input
            label="City"
            value={city}
            onChange={(event) => setCity(event.target.value)}
          />
          <Input
            label="State/Province"
            value={state}
            onChange={(event) => setState(event.target.value)}
          />
          <Input
            label="Zip/Postal Code"
            value={zip}
            onChange={(event) => setZip(event.target.value)}
          />
          <Input
            label="Country/Region"
            value={country}
            onChange={(event) => setCountry(event.target.value)}
          />
          <Button
            color="success"
            radius="full"
            className="text-white"
            type="submit"
            disabled={isSubmitting}
            size="sm"
          >
            Add Accommodation
          </Button>
        </form>
      </div>
    </>
  );
}
