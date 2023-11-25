"use client";
import React from "react";
import { BsHouseAddFill } from "react-icons/bs";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Input,
} from "@nextui-org/react";
import { useState, useEffect } from "react";
import { get } from "mongoose";
import SelectAccom from "../form-components/SelectAccom";

export default function AddAccommodationsBtn({ uuid, tripId, getAccoms }) {
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

  const { isOpen, onOpen, onOpenChange } = useDisclosure();

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
    console.log(accomDetails);

    try {
      // Send the form data to the serverless function
      const response = await fetch("http://localhost:3000/api/accommodations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(accomDetails),
      });

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
      <Button
        size="lg"
        isIconOnly
        className="bg-white w-fit min-w-fit min-h-fit h-fit p-1"
        onPress={onOpen}
        color="primary"
      >
        <BsHouseAddFill className="fill-blue-400" />
      </Button>
      <Modal
        size="2xl"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="top-center"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Add Accommodation
              </ModalHeader>
              <ModalBody className="grid grid-cols-6">
                <Input
                  autoFocus={true}
                  label="Accommodation Name "
                  placeholder="e.g La Cháuteau Resort"
                  value={accomName}
                  onChange={(event) => setAccomName(event.target.value)}
                  isRequired
                  autoComplete="off"
                  className="col-span-3"
                  variant="faded"
                />
                <SelectAccom className="col-span-3" setAccomType={setAccomType} />
                <Input
                  label="Check-In Date"
                  type="date"
                  placeholder="mm/dd/yyyy"
                  value={accomCheckIn}
                  onChange={(event) => setAccomCheckIn(event.target.value)}
                  isRequired
                  autoComplete="off"
                  className="col-span-2"
                  variant="faded"
                />
                <Input
                  label="Check-Out Date"
                  type="date"
                  placeholder="mm/dd/yyyy"
                  value={accomCheckOut}
                  onChange={(event) => setAccomCheckOut(event.target.value)}
                  isRequired
                  autoComplete="off"
                  className="col-span-2"
                  variant="faded"
                />
                <Input
                  label="Reservation Number"
                  placeholder="e.g"
                  value={accomResNum}
                  onChange={(event) => setAccomResNum(event.target.value)}
                  autoComplete="off"
                  className="col-span-2"
                  variant="faded"
                />
                <Input
                  label="Street"
                  placeholder="e.g 123 Main St"
                  value={street}
                  onChange={(event) => setStreet(event.target.value)}
                  autoComplete="off"
                  className="col-span-4"
                  variant="faded"
                  size="sm"
                />
                <Input
                  label="City"
                  placeholder="e.g San Francisco"
                  value={city}
                  onChange={(event) => setCity(event.target.value)}
                  autoComplete="off"
                  className="col-span-2"
                  variant="faded"
                  size="sm"
                />
                <Input
                  label="State/Province"
                  value={state}
                  onChange={(event) => setState(event.target.value)}
                  autoComplete="off"
                  className="col-span-2"
                  variant="faded"
                  size="sm"
                />
                <Input
                  label="Zip/Postal Code"
                  value={zip}
                  onChange={(event) => setZip(event.target.value)}
                  autoComplete="off"
                  className="col-span-2"
                  variant="faded"
                  size="sm"
                />
                <Input
                  label="Country/Region"
                  value={country}
                  onChange={(event) => setCountry(event.target.value)}
                  autoComplete="off"
                  className="col-span-2"
                  variant="faded"
                  size="sm"
                />
                <Input
                  label="Phone Number"
                  value={accomPhoneNumber}
                  onChange={(event) => setAccomPhoneNumber(event.target.value)}
                  autoComplete="off"
                  className="col-span-3"
                  variant="faded"
                  size="sm"
                />
                <Input
                  label="Email"
                  value={accomEmail}
                  onChange={(event) => setAccomEmail(event.target.value)}
                  autoComplete="off"
                  className="col-span-3"
                  variant="faded"
                  size="sm"
                />
              </ModalBody>
              <ModalFooter>
                <Button
                  size="md"
                  color="danger"
                  variant="flat"
                  onPress={onClose}
                >
                  Cancel
                </Button>
                <Button
                  size="md"
                  type="submit"
                  disabled={isSubmitting}
                  color="primary"
                  onPress={handleSubmit}
                >
                  Add Accommodation
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </form>
  );
}
