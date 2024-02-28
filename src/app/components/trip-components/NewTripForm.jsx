import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Input, useDisclosure} from "@nextui-org/react";
import SelectReason from "../form-components/SelectReason";

export default function NewTripForm({ show, setShow }) {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  const handleSubmit = () => {
    console.log("Form submitted");
  }
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
                />
                <div className="flex flex-row flex-wrap xl:flex-nowrap gap-2">
                  <Input
                    label="Arrival Date"
                    type="date"
                    placeholder="mm/dd/yyyy"
                  />
                  <Input
                    label="Departure Date"
                    type="date"
                    placeholder="mm/dd/yyyy"
                  />
                </div>
                <SelectReason />
              </ModalBody>
              <ModalFooter>
                <Button
                  size="sm"
                  color="danger"
                  variant="flat"
                  onPress={onClose}
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