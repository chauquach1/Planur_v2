"use client";
import { MdAddLocationAlt } from "react-icons/md";
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
import { useState } from "react";
import { NextResponse } from "next/server";
import SelectStopType from "../form-components/SelectStopType";
import SelectStopInterest from "../form-components/SelectStopInterest";

export default function AddStopBtn({ uuid, tripId, getTripStops }) {
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

  const { isOpen, onOpen, onOpenChange } = useDisclosure();

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
      const createStop = await fetch("http://localhost:3000/api/stops", {
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
    } catch (error) {
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Button
        type="button"
        size="lg"
        isIconOnly
        className="bg-white w-fit min-w-fit min-h-fit h-fit p-1"
        onPress={onOpen}
        color="primary"
      >
        <MdAddLocationAlt className="fill-blue-400" />
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
                Add Stop
              </ModalHeader>
              <ModalBody className="grid grid-cols-6">
                <Input
                  autoFocus={true}
                  label="Stop Name"
                  placeholder="e.g Golden Gate Bridge"
                  value={stopName}
                  onChange={(e) => setStopName(e.target.value)}
                  isRequired
                  autoComplete="off"
                  variant="faded"
                  className="col-span-2"
                />
                <SelectStopType setStopType={setStopType} />
                <SelectStopInterest setStopInterest={setStopInterest} />
                <Input
                  label="Arrival Date"
                  type="date"
                  placeholder="mm/dd/yyyy"
                  value={stopArrival}
                  onChange={(e) => setStopArrival(e.target.value)}
                  isRequired
                  autoComplete="off"
                  className="col-span-2"
                  variant="faded"
                />
                <Input
                  label="Check-Out Date"
                  type="date"
                  placeholder="mm/dd/yyyy"
                  value={stopDeparture}
                  onChange={(e) => setStopDeparture(e.target.value)}
                  isRequired
                  autoComplete="off"
                  className="col-span-2"
                  variant="faded"
                />
                <Input
                  label="Transportation"
                  placeholder="Car, Plane, Train, etc."
                  value={stopTransportation}
                  onChange={(e) => setStopTransportation(e.target.value)}
                  autoComplete="off"
                  className="col-span-2"
                  variant="faded"
                />
                <Input
                  label="Street"
                  placeholder="e.g 123 Main St"
                  value={street}
                  onChange={(e) => setStreet(e.target.value)}
                  autoComplete="off"
                  className="col-span-3"
                  variant="faded"
                  size="sm"
                />
                <Input
                  label="City"
                  placeholder="e.g San Francisco"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  autoComplete="off"
                  className="col-span-3"
                  variant="faded"
                  size="sm"
                />
                <Input
                  label="State/Province"
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  autoComplete="off"
                  className="col-span-2"
                  variant="faded"
                  size="sm"
                />
                <Input
                  label="Zip/Postal Code"
                  value={zip}
                  onChange={(e) => setZip(e.target.value)}
                  autoComplete="off"
                  className="col-span-2"
                  variant="faded"
                  size="sm"
                />
                <Input
                  label="Country/Region"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  autoComplete="off"
                  className="col-span-2"
                  variant="faded"
                  size="sm"
                />
                <Input
                  label="Email"
                  value={stopEmail}
                  onChange={(e) => setStopEmail(e.target.value)}
                  autoComplete="off"
                  className="col-span-3"
                  variant="faded"
                  size="sm"
                />
                <Input
                  label="Reservation/Confirmation"
                  value={stopResNum}
                  placeholder="e.g 1234567890"
                  onChange={(e) => setStopResNum(e.target.value)}
                  autoComplete="off"
                  className="col-span-3"
                  variant="faded"
                  size="sm"
                />
                <Input
                  label="Phone Number"
                  value={stopPhoneNumber}
                  onChange={(e) => setStopPhoneNumber(e.target.value)}
                  autoComplete="off"
                  className="col-span-3"
                  variant="faded"
                  size="sm"
                />
                <Input
                  onChange={(e) => setStopNotes(e.target.value)}
                  autoComplete="off"
                  className="col-span-3"
                  variant="faded"
                  maxRows={3}
                  value={stopNotes}
                  label="Notes"
                  size="sm"
                ></Input>
              </ModalBody>
              <ModalFooter>
                <Button
                  type="button"
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
                  Add Stop
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </form>
  );
}
