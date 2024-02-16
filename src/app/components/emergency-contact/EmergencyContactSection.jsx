import SectionContainer from "../trip-components/SectionContainer";
import { useState, useEffect } from "react";
import EmergencyContactCard from "./EmergencyContactCard";
import sampleEmergencyContacts from "../../_tests_/sampleEmergencyContacts";
import fetchAllEmergencyContacts from "../../_utils/contactsRequestsIndex";
import RevealSectionBtn from "../misc-components/RevealSectionBtn";
export default function EmergencyContactSection({ emergencyContactsProps, displayProps, requestProps, tripProps, category, id, ...props }) {
  const [showCategory, setShowCategory] = useState(true);

  const addEmergencyContact = () => {
    console.log("Add Emergency Contact Button Clicked");
    emergencyContactsProps.setActiveContact({});
    emergencyContactsProps.setShowContactForm(true);
    requestProps.setRequestType("POST");
  };

  useEffect(() => {
    const getEmergencyContacts = async () => {
      const emergencyContacts = await fetchAllEmergencyContacts(tripProps.tripId)
      emergencyContactsProps.setContactsIndex(emergencyContacts);
    }
    getEmergencyContacts();
  } , [props.tripId]);

  if (
    displayProps.tripDisplayTab !== "Emergency Contacts" &&
    displayProps.tripDisplayTab !== "Full Details"
  ) {
    return null;
  } else {
    return (
      <SectionContainer category="Emergency Contacts" showCategory={showCategory} setShowCategory={setShowCategory} arrowUp={showCategory} {...props}>
        <button
          className="ms-auto text-blue-500 text-sm hover:text-blue-600"
          onClick={addEmergencyContact}
        >
          Add New Contact
        </button>
        <div className={`${showCategory ? null : "hidden"} bg-slate-100 rounded-b-xl`}>
          <div
            id="emergency-contact-section"
            category="Emergency Contacts"
            className={`grid gap-1 p-0 justify-start
          grid-cols-1 2xl:grid-cols-2`}
          >
            {emergencyContactsProps.contactsIndex.map((contact) => {
              return (
                <EmergencyContactCard
                  key={contact.firstName + contact.lastName}
                  contact={contact}
                  requestProps={requestProps}
                  emergencyContactsProps={emergencyContactsProps}
                />
              );
            })}
          </div>
        </div>
      </SectionContainer>
    );
  }
}
