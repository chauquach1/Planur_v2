"use client";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  useDisclosure,
  Button,
  Input,
} from "@nextui-org/react";
import { useEffect, useState } from "react";
import SelectReason from "../form-components/SelectReason";
import DeleteTripBtn from "../form-components/DeleteTripBtn";
import { format, parseISO, set } from "date-fns";
import { useRouter } from "next/navigation";

export default function EditTripForm({ uuid, trip, tripId }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [tripName, setTripName] = useState("");
  const [destination, setDestination] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [guests, setGuests] = useState("");
  const [reason, setReason] = useState("");
  const [transportation, setTransportation] = useState("");
  const [isSubmitting, setIsSubmitting] = useState("");
  const [message, setMessage] = useState("");
  const router = useRouter();

  const currTripStartDate = trip.tripStartDate;
  const currTripEndDate = trip.tripEndDate;
  const parsedStartDate = parseISO(currTripStartDate);
  const parsedEndDate = parseISO(currTripEndDate);
  const formattedStartDate = format(parsedStartDate, "yyyy-MM-dd");
  const formattedEndDate = format(parsedEndDate, "yyyy-MM-dd");

  useEffect(() => {
    setStartDate(formattedStartDate);
    setEndDate(formattedEndDate);
    setTripName(trip.tripName);
    setDestination(trip.tripDestination);
    setGuests(trip.tripGuests);
    setReason(trip.tripReason);
    setTransportation(trip.tripTransportation);
  }, [trip]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setMessage("");

    // Construct the form data object
    const tripDetails = {
      uuid,
      startDate,
      endDate,
      tripName,
      destination,
      guests,
      reason,
      transportation,
    };

    try {
      // console.log("tripdetails from edittripform", tripDetails);
      const response = await fetch(`https://planur-v2.vercel.app/api/trip/${tripId}`, {
        method: "PUT",
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
      setMessage("Trip successfully created!");

      // Reset form fields
      setTripName("");
      setDestination("");
      setStartDate("");
      setEndDate("");
      setGuests("");
      setReason("");
      setTransportation("");
    } catch (error) {
      setMessage("Failed to create trip: " + error.message);
    } finally {
      setIsSubmitting(false);
      router.refresh();
    }
  };

  return (
    <div className="flex flex-row justify-end gap-2">
      <Button
        onPress={onOpen}
        size="sm"
        className="max-w-fit bg-transparent text-blue-400 self-end"
      >
        Edit Trip
      </Button>
      <DeleteTripBtn tripId={tripId} />
      <Modal isOpen={isOpen} placement="top-center" onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Edit Trip Form
              </ModalHeader>
              <ModalBody>
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
                    <SelectReason setReason={setReason} />
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
                      onChange={(event) =>
                        setTransportation(event.target.value)
                      }
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
                      onPress={onClose}
                    >
                      Generate Itinerary
                    </Button>
                  </div>
                </form>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
