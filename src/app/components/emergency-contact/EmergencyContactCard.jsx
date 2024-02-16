import { set } from "date-fns";
import { MdContactPhone, MdEdit } from "react-icons/md";

export default function EmergencyContactCard({ contact, emergencyContactsProps: {contactsIndex, setContactsIndex, activeContact, setActiveContact, showContactForm, setShowContactForm}, requestProps: {requestType, setRequestType} }) {
  const address = contact.address;
  const detailClass = "border-l-2 ms-2 ps-2 border-default-400 flex-wrap";

  const updateContact = () => {
    console.log('updateContact btn clicked');
    setActiveContact(contact);
    setShowContactForm(true);
    setRequestType('PUT');
  }

  return (
    <div
      id="emergency-contact-card"
      className="flex flex-col p-3 rounded-xl w-full gap-1 bg-white text-sm break-words"
    >
      <p className="text-medium font-semibold flex flex-row flex-wrap items-center break-words xs:gap-2">
        <MdContactPhone className="hidden xs:block" />
        {contact.firstName} {contact.lastName}
        <span className="hidden sm:block text-default-400 text-sm font-normal break-words">
          ({contact.relationship})
        </span>
        <button onClick={updateContact} className="ms-auto">
          <MdEdit />
        </button>
      </p>
      <p className={detailClass}>{contact.phoneNumber || 'Add Phone Number'}</p>
      <p className={detailClass}>
        {address.street}, {address.city} <br></br>
        {address.state} {address.zip}, {address.country}
      </p>
      <a type="email" href={`mailto:${contact.email}`} className={`${detailClass} text-blue-400`}>{contact.email}</a>
      <p label="First Name" className={`block sm:hidden ${detailClass}`}>
        {contact.relationship}
      </p>
    </div>
  );
}
