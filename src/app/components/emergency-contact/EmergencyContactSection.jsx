import SectionContainer from "../trip-components/SectionContainer";
import { useState, useEffect, use } from "react";
import EmergencyContactCard from "./EmergencyContactCard";
import sampleEmergencyContacts from "../../_tests_/sampleEmergencyContacts";
import fetchAllEmergencyContacts from "../../_utils/contactsRequestsIndex";
import RevealSectionBtn from "../misc-components/RevealSectionBtn";
export default function EmergencyContactSection({ emergencyContactsProps, displayProps, requestProps, tripProps, category, id, ...props }) {
  const [showCategory, setShowCategory] = useState(false);
  const { setContactsIndex, setShowContactForm, setActiveContact } = emergencyContactsProps;
  const { contactsIndex } = emergencyContactsProps;
  const { tripId } = tripProps;
  const { tripDisplayTab } = displayProps;
  const { setRequestType } = requestProps;

  useEffect(() => {
    setShowCategory(false);
  }, [tripId]);


  const addEmergencyContact = () => {
    setActiveContact({});
    setShowContactForm(true);
    setRequestType("POST");
  };

  useEffect(() => {
    const getEmergencyContacts = async () => {
      const emergencyContacts = await fetchAllEmergencyContacts(tripId)
      setContactsIndex(emergencyContacts);
    }
    getEmergencyContacts();
  } , [tripId]);

  if (
    tripDisplayTab !== "Emergency Contacts" &&
    tripDisplayTab !== "Full Details"
  ) {
    return null;
  } else {
    return (
      <SectionContainer
        category="Emergency Contacts"
        showCategory={showCategory}
        setShowCategory={setShowCategory}
        arrowUp={showCategory}
        {...props}
      >
        <button
          className="ms-auto text-blue-500 text-sm hover:text-blue-600"
          onClick={addEmergencyContact}
        >
          Add New Contact
        </button>
        <div
          className={`${
            showCategory ? null : "hidden"
          } bg-slate-100 rounded-b-xl`}
        >
          <div id="emergency-contacts-section" className="min-h-[38px]">
            {contactsIndex && contactsIndex.length > 0 ? (
              <div
                id="emergency-contacts-index"
                className="grid gap-1 p-0 justify-start grid-cols-1 2xl:grid-cols-2"
              >
                {contactsIndex.map((contact) => (
                  <EmergencyContactCard
                    key={contact.id || contact.firstName + contact.lastName} // Assuming each contact has a unique 'id'
                    fetchedContact={contact}
                    requestProps={requestProps}
                    emergencyContactsProps={emergencyContactsProps} // Consider if passing the whole object is necessary
                    tripId={tripId}
                  />
                ))}
              </div>
            ) : (
              <p className="text-center text-slate-500 text-lg">
                No contacts found
              </p>
            )}
          </div>
        </div>
      </SectionContainer>
    );
  }
}
