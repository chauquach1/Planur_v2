import SectionContainer from "../trip-components/SectionContainer";
export default function AccomsSection({ accoms }) {
  let accom = accoms[0];
  console.log("accom: ", accom);
  let address = accom.accomAddress;
  return (
    <SectionContainer category="Accommodations">
      <h1>{accom.accomName}</h1>
      <h1>{accom.accomCheckIn}</h1>
      <h1>{accom.accomCheckOut}</h1>
      <h1>{accom.accomType}</h1>
      <h1>{address.email}</h1>
      <h1>{accom.accomResNum}</h1>
      <h1>{address.accomPhoneNumber}</h1>
      <h1>{address.accomAddress}</h1>
      <h1>{address.accomCity}</h1>
      <h1>{address.accomState}</h1>
      <h1>{address.accomZip}</h1>
      <h1>{address.accomCountry}</h1>
    </SectionContainer>
  );
}
