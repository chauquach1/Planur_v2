import { MdContactPhone } from "react-icons/md";

export default function EmergencyContactCard({ contact }) {
  const address = contact.address;
  const detailClass = "border-l-2 ms-2 ps-2 border-default-400 flex-wrap";
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
