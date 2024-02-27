import { MdContactPhone, MdEdit, MdDelete } from "react-icons/md";
import { useState, useEffect } from "react";
import { deleteContact } from "../../_utils/contactsRequestsIndex";
import AddressText from "../misc-components/AddressText";
export default function EmergencyContactCard({ fetchedContact, emergencyContactsProps: {contactsIndex, setContactsIndex, activeContact, setActiveContact, showContactForm, setShowContactForm}, requestProps: {requestType, setRequestType}, tripId }) {
  const [contact, setContact] = useState(fetchedContact);
  let address = contact.address;
  const detailClass = "border-l-2 ms-2 ps-2 border-default-400 flex-wrap";

  const updateContact = () => {
    console.log('updateContact btn clicked');
    setActiveContact(contact);
    setShowContactForm(true);
    setRequestType('PUT');
  }

  const handleDeleteContact = () => {
    // Use filter to return a new array excluding the item with the matching contactId
    const updatedContactsIndex = contactsIndex.filter(includedContact => includedContact._id !== contact._id);
    console.log('updatedContactsIndex', updatedContactsIndex);
    setContactsIndex(updatedContactsIndex);
    deleteContact(contact._id, tripId);
  };

  useEffect(() => {
    setContact(fetchedContact);
  }, [fetchedContact]);

  return (
    <div
      id="emergency-contact-card"
      className="flex flex-col p-3 rounded-xl w-full gap-1 bg-white text-sm break-words"
    >
      <p className="text-medium font-semibold flex flex-row flex-wrap items-center break-words xs:gap-2">
        <MdContactPhone className="hidden xs:block" />
        {contact.firstName} {contact.lastName}
        <span className="hidden sm:block text-default-400 text-sm font-normal break-words">
          {contact.relationship ? `(${contact.relationship})` : ""}
        </span>
        <button onClick={updateContact} className="ms-auto">
          <MdEdit />
        </button>
        <button onClick={handleDeleteContact} className="">
          <MdDelete />
        </button>
      </p>
      {contact.phoneNumber ? (
        <p className={detailClass}>{contact.phoneNumber}</p>
      ) : (
        <p className={`${detailClass} italic text-slate-500`}>No Phone Number</p>
      )}
      <p className={detailClass}>
        <AddressText category={address} value="street" />,{" "}
        <AddressText category={address} value="city" />
        <br></br>
        <AddressText category={address} value="state" />{" "}
        <AddressText category={address} value="zip" />,{" "}
        <AddressText category={address} value="country" />
      </p>
      {contact.email ? (
        <a
          type="email"
          href={`mailto:${contact.email}`}
          className={`${detailClass} text-blue-400`}
        >
          {contact.email}
        </a>
      ) : (
        <p className={`${detailClass} italic text-slate-500`}>No Email</p>
      )}
      <p label="First Name" className={`block sm:hidden ${detailClass}`}>
        {contact.relationship}
      </p>
    </div>
  );
}
