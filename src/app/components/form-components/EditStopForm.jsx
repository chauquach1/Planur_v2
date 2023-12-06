import { TiEdit } from "react-icons/ti";
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
import { useEffect, useState } from "react";
import { format, parseISO, set } from "date-fns";

export default function EditStopsForm({
  uuid,
  tripId,
  currCardData,
  currCardType,
  handleUpdateForm,
}) {
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
  const [stopId, setStopId] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  const currStopArrival = currCardData.stopArrival;
  const currStopDeparture = currCardData.stopDeparture;
  const parsedArrival = parseISO(currStopArrival);
  const parsedDeparture = parseISO(currStopDeparture);
  const formattedArrival = format(new Date(parsedArrival), "yyyy-MM-dd");
  const formattedDeparture = format(new Date(parsedDeparture), "yyyy-MM-dd");

  useEffect(() => {
    setStopName(currCardData.stopName);
    setStopType(currCardData.stopType);
    setStopArrival(formattedArrival);
    setStopDeparture(formattedDeparture);
    setStopTransportation(currCardData.stopTransportation);
    setStreet(currCardData.stopAddress.street);
    setCity(currCardData.stopAddress.city);
    setState(currCardData.stopAddress.state);
    setZip(currCardData.stopAddress.zip);
    setCountry(currCardData.stopAddress.country);
    setStopInterest(currCardData.stopInterest);
    setStopResNum(currCardData.stopResNum);
    setStopPhoneNumber(currCardData.stopPhoneNumber);
    setStopEmail(currCardData.stopEmail);
    setStopNotes(currCardData.stopNotes);
    setStopId(currCardData._id);
  }, [currCardData]);

  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setMessage("");

    // Construct the form data object
    const updatedStop = {
      uuid,
      tripId,
      stopId: stopId,
      stopName: stopName,
      stopType: stopType,
      stopArrival: stopArrival,
      stopDeparture: stopDeparture,
      stopTransportation: stopTransportation,
      stopAddress: {
        street: street,
        city: city,
        state: state,
        zip: zip,
        country: country,
      },
      stopInterest: stopInterest,
      stopResNum: stopResNum,
      stopNotes: stopNotes,
      stopPhoneNumber: stopPhoneNumber,
      stopEmail: stopEmail,
    };

    try {
      // Send the form data to the serverless function
      const response = await fetch(
        `https://planur-v2.vercel.app/api/stops?tripId=${tripId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedStop),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      handleUpdateForm(result, "stops");
      setMessage("Stop updated successfully!");
      // Reset form fields
      setStopName(currCardData.stopName);
      setStopType(currCardData.stopType);
      setStopInterest(currCardData.stopInterest);
      setStopArrival(formattedArrival);
      setStopDeparture(formattedDeparture);
      setStopPhoneNumber(currCardData.stopPhoneNumber);
      setStopEmail(currCardData.stopEmail);
      setStopTransportation(currCardData.stopTransportation);
      setStreet(currCardData.stopAddress.street);
      setCity(currCardData.stopAddress.city);
      setState(currCardData.stopAddress.state);
      setZip(currCardData.stopAddress.zip);
      setCountry(currCardData.stopAddress.country);
      setStopResNum(currCardData.stopResNum);
      setStopNotes(currCardData.stopNotes);
      setStopId(currCardData._id);
    } catch (error) {
      setMessage("Failed to create accommodation: " + error.message);
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <Button
        isIconOnly
        size="sm"
        className="bg-transparent p-0 h-fit w-fit min-w-fit min-h-fit"
        currCardData={currCardData}
        currCardType={currCardType}
        onPress={onOpen}
      >
        <TiEdit className="text-gray-400 place-self-end hover:text-white/100 w-6 h-6 " />
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
                  placeholder="Grandmas House, Disneyland, etc."
                  value={stopName}
                  onChange={(e) => setStopName(e.target.value)}
                  isRequired
                  autoComplete="off"
                  variant="faded"
                  className="col-span-3"
                />
                <Input
                  label="Category"
                  placeholder={"Restaurant, Landmark, Family, etc."}
                  value={stopType}
                  onChange={(e) => setStopType(e.target.value)}
                  isRequired
                  autoComplete="off"
                  variant="faded"
                  className="col-span-1"
                />
                <Input
                  label="Interest"
                  placeholder={"Must-Go, High, Indifferent, etc."}
                  value={stopInterest}
                  onChange={(e) => setStopInterest(e.target.value)}
                  isRequired
                  autoComplete="off"
                  variant="faded"
                  className="col-span-2"
                />
                <Input
                  label="Arrival Date"
                  type="date"
                  placeholder="mm/dd/yyyy"
                  value={formattedArrival}
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
                  value={formattedDeparture}
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
                  Update Stop
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </form>
  );
}
