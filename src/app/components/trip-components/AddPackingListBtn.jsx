import React from "react";
import { MdFormatListBulletedAdd } from "react-icons/md";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Checkbox,
  Input,
  Link,
} from "@nextui-org/react";
import { useState, useEffect } from "react";

export default function AddPackingListBtn({ uuid, tripId }) {
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

  const handleSubmit = async (event) => {
    console.log("Submitting form...");
    // event.preventDefault();
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

    // Log the form data to ensure it's collected correctly

    try {
      console.log("Form data being sent to the server:", stopDetails);
      const response = await fetch(`/api/stops`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(stopDetails),
      });
      console.log(response);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();

      // Process the response here
      console.log("Stop created:", result);
      setMessage("Stop successfully created!");

      // Reset form fields
      setStopName("");
      setStopType("");
      setStopInterest("");
      setStopArrival("");
      setStopDeparture("");
      setCity("");
      setState("");
      setZip("");
      setCountry("");
      setStopTransportation("");
      setStopResNum("");
      setStopNotes("");
    } catch (error) {
      console.log("Failed to create stop:", error);
      setMessage("Failed to create stop: " + error.message);
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
        <MdFormatListBulletedAdd className="fill-blue-400" />
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top-center">
        <ModalContent>
          {(onClose) => (
            <>
            <ModalHeader className="flex flex-col gap-1">
                Add Stop
              </ModalHeader>
              <ModalBody>
                <Input
                  autoFocus={true}
                  label="Stop Name"
                  placeholder="Grandmas House, Disneyland, etc."
                  value={stopName}
                  onChange={(e) => setStopName(e.target.value)}
                  isRequired
                  autoComplete="off"
                  variant="faded"
                />
                <Input
                  label="Category"
                  placeholder={"Restaurant, Landmark, Family, etc."}
                  value={stopType}
                  onChange={(e) => setStopType(e.target.value)}
                  isRequired
                  autoComplete="off"
                  variant="faded"
                />
                <Input
                  label="Category"
                  placeholder={"Restaurant, Landmark, Family, etc."}
                  value={stopType}
                  onChange={(e) => setStopType(e.target.value)}
                  isRequired
                  autoComplete="off"
                  variant="faded"
                />
                <Input
                  label="Arrival Date"
                  type="date"
                  placeholder="mm/dd/yyyy"
                  value={stopArrival}
                  onChange={(e) => setStopArrival(e.target.value)}
                  isRequired
                  autoComplete="off"
                  // className="col-span-2"
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
                  // className="col-span-2"
                  variant="faded"
                />
                <Input
                  label="Reservation/Confirmation Number"
                  placeholder="e.g"
                  value={stopResNum}
                  onChange={(e) => setStopResNum(e.target.value)}
                  autoComplete="off"
                  // className="col-span-2"
                  variant="faded"
                />
                <Input
                  label="Street"
                  placeholder="e.g 123 Main St"
                  value={street}
                  onChange={(e) => setStreet(e.target.value)}
                  autoComplete="off"
                  // className="col-span-4"
                  variant="faded"
                  size="sm"
                />
                <Input
                  label="City"
                  placeholder="e.g San Francisco"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  autoComplete="off"
                  // className="col-span-2"
                  variant="faded"
                  size="sm"
                />
                <Input
                  label="State/Province"
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  autoComplete="off"
                  // className="col-span-2"
                  variant="faded"
                  size="sm"
                />
                <Input
                  label="Zip/Postal Code"
                  value={zip}
                  onChange={(e) => setZip(e.target.value)}
                  autoComplete="off"
                  // className="col-span-2"
                  variant="faded"
                  size="sm"
                />
                <Input
                  label="Country/Region"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  autoComplete="off"
                  // className="col-span-2"
                  variant="faded"
                  size="sm"
                />
                <Input
                  label="Phone Number"
                  value={stopPhoneNumber}
                  onChange={(e) => setStopPhoneNumber(e.target.value)}
                  autoComplete="off"
                  // className="col-span-3"
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
