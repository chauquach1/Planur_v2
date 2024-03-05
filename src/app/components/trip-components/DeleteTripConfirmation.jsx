import React from "react";
import { MdLocationPin, MdEdit, MdDelete } from "react-icons/md";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";

export default function DeleteTripConfirmation({tripProps}) {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const [modalPlacement, setModalPlacement] = React.useState("auto");
  const { selectedTrip, setShowEditTripForm } = tripProps;

  const deleteTrip = () => {
    console.log("Delete button clicked");
  }

  return (
    <div className="flex flex-col gap-2">
      <button onClick={onOpen} className="max-w-fit"><MdDelete/></button>
      <Modal 
        isOpen={isOpen} 
        placement={modalPlacement}
        onOpenChange={onOpenChange} 
      >
        <ModalContent>
          {(onClose) => (
            <form action={deleteTrip}>
              <ModalHeader className="flex flex-col gap-1"><h1>Are you sure you want to delete this trip?</h1></ModalHeader>
              <ModalBody>
                <h1 className="text-center">{selectedTrip.tripName}</h1>
              </ModalBody>
              <ModalFooter>
                <Button color="" variant="light" onPress={onClose}>
                  Cancel
                </Button>
                <Button color="danger" type="submit" onPress={onClose}>
                  Delete
                </Button>
              </ModalFooter>
            </form>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
