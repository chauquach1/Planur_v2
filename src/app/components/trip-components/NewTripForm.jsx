import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Input, useDisclosure} from "@nextui-org/react";
import SelectReason from "../form-components/SelectReason";
import { useEffect, useState } from "react";
import createNewTrip from "../../_utils/tripRequestsIndex";

export default function NewTripForm({ user, trips, setTripsIndex, show, setShow }) {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const [initialState, setInitialState] = useState({});
  const postTripWithUserId = createNewTrip.bind(null, user.uuid);

  // UPDATE STATE TRIPS INDEX
  const tripIndexNewTrip = (newTrip) => {
    // Clone the existing stopsIndex to ensure immutability
    const updatedTripsIndex = [...trips];

    updatedTripsIndex.push(newTrip);

    // Update the state with the new stops array
    setTripsIndex(updatedTripsIndex);
  };

  const handleSubmit = async () => {
    console.log("Form submitted");
    let newTrip = await postTripWithUserId(initialState);
    tripIndexNewTrip(newTrip);
  };

  const handleClose = () => {
    setInitialState({});
    onClose();
  };

  // HANDLE INPUT CHANGE FUNCTIONS
  const handleInputChange = (key, value) => {
    setInitialState((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  return (
    <>
      {/* <Button onPress={onOpen}>Open Modal</Button> */}
      <Button
        size="sm"
        radius="full"
        onPress={onOpen}
        className="w-full text-end bg-transparent/10 hover:bg-transparent/5 text-peach-500 hover:text-peach-400 text-sm rounded-md"
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
                    onChange={(e) =>
                      handleInputChange("tripName", e.target.value)
                    }
                  />
                  <Input
                    size="sm"
                    autoFocus
                    label="Destination"
                    name="tripDestination"
                    placeholder={"Enter your destination"}
                    onChange={(e) =>
                      handleInputChange("tripDestination", e.target.value)
                    }
                  />
                  <div className="flex flex-row flex-wrap xl:flex-nowrap gap-2">
                    <Input
                      label="Arrival Date"
                      type="date"
                      placeholder="mm/dd/yyyy"
                      onChange={(e) =>
                        handleInputChange("tripStartDate", e.target.value)
                      }
                    />
                    <Input
                      label="Departure Date"
                      type="date"
                      placeholder="mm/dd/yyyy"
                      onChange={(e) =>
                        handleInputChange("tripEndDate", e.target.value)
                      }
                    />
                  </div>
                  <SelectReason
                    onChange={(e) =>
                      handleInputChange("tripReason", e.target.value)
                    }
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