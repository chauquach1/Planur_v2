import SectionContainer from "../trip-components/SectionContainer";
import EmergencyContactCard from "./EmergencyContactCard";
import sampleEmergencyContacts from "../../_tests_/sampleEmergencyContacts";
export default function EmergencyContactSection({contacts}) {
  return (
    <SectionContainer category="Emergency Contacts">
      {contacts.map((contact) => {
        return <EmergencyContactCard key={contact.firstName + contact.lastName} contact={contact} />;
      })}
    </SectionContainer>
  );
}
