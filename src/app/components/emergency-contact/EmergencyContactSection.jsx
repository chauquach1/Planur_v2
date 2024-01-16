import { useState } from "react";
import EmergencyContactCard from "./EmergencyContactCard";
import sampleEmergencyContacts from "../../_tests_/sampleEmergencyContacts";
import RevealSectionBtn from "../misc-components/RevealSectionBtn";
export default function EmergencyContactSection({ category, id, ...props }) {
  const [showCategory, setShowCategory] = useState(false);
  const [arrowUp, setArrow] = useState(false);
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
      <div className="flex flex-col bg-peach-300 rounded-xl">
        <RevealSectionBtn category={"Emergency Contacts"} buttonClicked={buttonClicked} arrowUp={arrowUp} />
        <div
          id="emergency-contact-section"
          category="Emergency Contacts"
          className={`${
            showCategory ? "grid" : "hidden"
          } gap-1 p-4 justify-start
          grid-cols-1 2xl:grid-cols-2 bg-slate-100 rounded-b-xl
        
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
      </div>
    );
  }
}
