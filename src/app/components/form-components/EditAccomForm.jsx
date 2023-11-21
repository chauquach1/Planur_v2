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
import { format, parseISO } from "date-fns";

export default function EditAccomsForm({
  uuid,
  tripId,
  currCardData,
  handleUpdateForm,
}) {
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
  const [accomId, setAccomId] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const currAccomCheckIn = currCardData.accomCheckIn;
  const currAccomCheckOut = currCardData.accomCheckOut;
  const parsedCheckIn = parseISO(currAccomCheckIn);
  const parsedCheckOut = parseISO(currAccomCheckOut);
  const formattedCheckIn = format(new Date(parsedCheckIn), "yyyy-MM-dd");
  const formattedCheckOut = format(new Date(parsedCheckOut), "yyyy-MM-dd");

  useEffect(() => {
    setAccomName(currCardData.accomName);
    setAccomType(currCardData.accomType);
    setAccomCheckIn(formattedCheckIn);
    setAccomCheckOut(formattedCheckOut);
    setStreet(currCardData.accomAddress.street);
    setCity(currCardData.accomAddress.city);
    setState(currCardData.accomAddress.state);
    setZip(currCardData.accomAddress.zip);
    setCountry(currCardData.accomAddress.country);
    setAccomPhoneNumber(currCardData.accomPhoneNumber);
    setAccomEmail(currCardData.accomEmail);
    setAccomResNum(currCardData.accomResNum);
    setAccomId(currCardData._id);
  }, [currCardData]);

  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const handleSubmit = async () => {
    setIsSubmitting(true);

    // Construct the form data object
    const updatedAccom = {
      uuid,
      tripId,
      accomId: accomId,
      accomName: accomName,
      accomType: accomType,
      accomCheckIn: formattedCheckIn,
      accomCheckOut: formattedCheckOut,
      accomAddress: {
        street: street,
        city: city,
        state: state,
        zip: zip,
        country: country,
      },
      accomPhoneNumber: accomPhoneNumber,
      accomEmail: accomEmail,
      accomResNum: accomResNum,
    };

    try {
      // Send the form data to the serverless function
      const response = await fetch(
        `https://planur-v2.vercel.app/api/accommodations?tripId=${tripId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedAccom),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      
      const result = await response.json();
      handleUpdateForm(result, 'accommodations');
      // Reset form fields
      setAccomName(currCardData.accomName);
      setAccomType(currCardData.accomType);
      setAccomCheckIn(formattedCheckIn);
      setAccomCheckOut(formattedCheckOut);
      setStreet(currCardData.accomAddress.street);
      setCity(currCardData.accomAddress.city);
      setState(currCardData.accomAddress.state);
      setZip(currCardData.accomAddress.zip);
      setCountry(currCardData.accomAddress.country);
      setAccomPhoneNumber(currCardData.accomPhoneNumber);
      setAccomEmail(currCardData.accomEmail);
      setAccomResNum(currCardData.accomResNum);
      setAccomId(currCardData._id);
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
                Update Accommodation
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
                <Input
                  label="Accommodation Type"
                  placeholder="Hotel, Hostel, Airbnb, etc."
                  value={accomType}
                  onChange={(event) => setAccomType(event.target.value)}
                  isRequired
                  autoComplete="off"
                  className="col-span-3"
                  variant="faded"
                />
                <Input
                  label="Check-In Date"
                  type="date"
                  placeholder="mm/dd/yyyy"
                  defaultValue={formattedCheckIn}
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
                  defaultValue={formattedCheckOut}
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
                  Update Accommodation
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </form>
  );
}
