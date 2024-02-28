import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Input, useDisclosure} from "@nextui-org/react";
import SelectReason from "../form-components/SelectReason";
import { useEffect, useState } from "react";

export default function NewTripForm({ show, setShow }) {
  const {isOpen, onOpen, onOpenChange, onClose} = useDisclosure();
  const [initialState, setInitialState] = useState({});

  const handleSubmit = () => {
    console.log("Form submitted");
  }

  const handleClose = () => {
    setInitialState({});
    onClose();
  }

  useEffect(() => {
    console.log('NewTripForm initialState:', initialState);
  }, [initialState]);

  // HANDLE INPUT CHANGE FUNCTIONS
  const handleInputChange = (key, value) => {
    setInitialState(prevState => ({
      ...prevState,
      [key]: value
    }));
  };

  return (
    <>
      {/* <Button onPress={onOpen}>Open Modal</Button> */}
      <Button
        size="sm"
        radius="full"
        onPress={onOpen}
        className="mt-auto ms-auto text-end bg-transparent/10 hover:bg-transparent/5 text-peach-500 hover:text-peach-400 text-sm rounded-md"
      >
        + New Trip
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Add New Trip
              </ModalHeader>
              <form action={handleSubmit}>
              <ModalBody>
                <Input
                  size="sm"
                  autoFocus
                  label="Trip Name"
                  name="tripName"
                  placeholder={"Enter your trip name"}
                  onChange={(e) => handleInputChange("tripName", e.target.value)}
                />
                <div className="flex flex-row flex-wrap xl:flex-nowrap gap-2">
                  <Input
                    label="Arrival Date"
                    type="date"
                    placeholder="mm/dd/yyyy"
                    onChange={(e) => handleInputChange("tripStartDate", e.target.value)}
                  />
                  <Input
                    label="Departure Date"
                    type="date"
                    placeholder="mm/dd/yyyy"
                    onChange={(e) => handleInputChange("tripEndDate", e.target.value)}
                  />
                </div>
                <SelectReason 
                  onChange={(e) => handleInputChange("tripReason", e.target.value)}
                />
              </ModalBody>
              <ModalFooter>
                <Button
                  size="sm"
                  color="danger"
                  variant="flat"
                  onPress={handleClose}
                >
                  Close
                </Button>
                <Button size="sm" color="primary" type="submit">
                  Create Trip
                </Button>
              </ModalFooter>
              </form>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}