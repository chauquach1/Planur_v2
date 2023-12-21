import { useState } from "react";
import EmergencyContactCard from "./EmergencyContactCard";
import sampleEmergencyContacts from "../../_tests_/sampleEmergencyContacts";
import RevealSectionBtn from "../misc-components/RevealSectionBtn";
export default function EmergencyContactSection({ category, id, ...props }) {
  const [showCategory, setShowCategory] = useState(true);
  const [arrowUp, setArrow] = useState(true);
  const [btnText, setBtnText] = useState(true);
  const buttonClicked = () => {
    setBtnText(!btnText);
    setShowCategory(!showCategory);
    setArrow(!arrowUp);
  };
  const contacts = sampleEmergencyContacts;
  if (
    props.activeTab !== "Emergency Contacts" &&
    props.activeTab !== "Full Details"
  ) {
    return null;
  } else {
    return (
      <>
        <div className="flex flex-row w-full justify-between border-y-2 py-2 pe-10">
          <h1 className="font-bold text-lg">Emergency Contacts</h1>
          <RevealSectionBtn buttonClicked={buttonClicked} arrowUp={arrowUp} />
        </div>
        <div
          id="emergency-contact-section"
          category="Emergency Contacts"
          className={`${
            showCategory ? "grid" : "hidden"
          } gap-1 xl:px-2 justify-start
          grid-cols-1 2xl:grid-cols-2
        
        `}
        >
          {contacts.map((contact) => {
            return (
              <EmergencyContactCard
                key={contact.firstName + contact.lastName}
                contact={contact}
              />
            );
          })}
        </div>
      </>
    );
  }
}
