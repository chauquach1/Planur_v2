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
  Accordion,
  AccordionItem,
  CheckboxGroup,
  Checkbox,
} from "@nextui-org/react";
import {useState} from "react";

export default function EditPackListForm({ currCardData, currCardType }) {
  const sampleList = {
    _id: "65557a6dc70c4bee8f316d33",
    clothes: {
      shirts: true,
      pants: true,
      shorts: true,
      sweater: true,
      underwear: true,
    },
    luggage: {
      backpack: false,
      carryon: false,
      dufflebag: false,
      suitcase: false,
      garmentbag: false,
    },
    toiletries: {
      toothbrush: false,
      toothpaste: false,
      shampoo: false,
      conditioner: false,
      sunscreen: false,
    },
    miscellaneous: {
      cellphone: true,
      laptop: true,
      tablet: false,
      passport: false,
      medication: false,
    },
    emergencyContact: {
      firstName: "Chau",
      lastName: "Quach",
      relationship: "",
      phoneNumber: "8589223709",
      email: "chau268@gmail.com",
      address: {
        street: "717 Merit Dr",
        city: "San Marcos",
        state: "California",
        zip: "92078",
        country: "United States",
      },
    },
  };

  const updatedPackList = {
    _id: "6555bc1cbb19afab8107a736",
    clothes: {
      shirts: true,
      pants: true,
      shorts: true,
      sweater: true,
      underwear: true,
    },
    luggage: {
      backpack: true,
      carryon: true,
      dufflebag: true,
      suitcase: true,
      garmentbag: true,
    },
    toiletries: {
      toothbrush: true,
      toothpaste: true,
      shampoo: true,
      conditioner: true,
      sunscreen: true,
    },
    miscellaneous: {
      cellphone: true,
      laptop: true,
      tablet: true,
      passport: true,
      medication: true,
    },
    emergencyContact: {
      firstName: "Chau",
      lastName: "Quach",
      relationship: "",
      phoneNumber: "8589223709",
      email: "chau268@gmail.com",
      address: {
        street: "717 Merit Dr",
        city: "San Marcos",
        state: "California",
        zip: "92078",
        country: "United States",
      },
    },
  };

  const [incomingList, setIncomingList] = useState(sampleList);
  const [newPackList, setNewPackList] = useState(updatedPackList);

  const updatePackList = () => {
    setIncomingList(newPackList);
  };

  const logPacklists = () => {
  };

  const categoryCount = (category) => {
    let list = data[category]; // Access the category in packList
    let count = 0;
    Object.values(list).forEach((item) => {
      // Use forEach for iterating
      if (item === true) {
        <p>{item}</p>;
      }
    });
    return count;
  };



  return (
    <>
      <div className="w-fit place-self-end h-fit">
        <Button
          isIconOnly
          size="sm"
          className="bg-transparent p-0 h-fit w-fit min-w-fit min-h-fit"
          currCardData={currCardData}
          currCardType={currCardType}
        >
          <TiEdit className="text-gray-400 place-self-end hover:text-white/100 w-6 h-6 " />
        </Button>
      </div>
    </>
  );
}
