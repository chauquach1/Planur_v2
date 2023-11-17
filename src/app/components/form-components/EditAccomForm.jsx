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

export default function EditAccomsForm({currCardData, currCardType}) {
    return (
      <>
        <div className="w-fit place-self-end h-fit">
          <Button
            isIconOnly
            size="sm"
            className="bg-transparent p-0 h-fit w-fit min-w-fit min-h-fit"
            currCardData={currCardData}
            currCardType={currCardType}
            onPress={() => {
              console.log(currCardData);
            }}
          >
            <TiEdit className="text-gray-400 place-self-end hover:text-white/100 w-6 h-6 " />
          </Button>
        </div>
      </>
    );
  }