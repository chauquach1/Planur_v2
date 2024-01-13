import PackListForm from "../../packlist/PacklistForm"
import AccomsForm from "../../accommodations/AccomsForm";
import NewStopForm from "../../stops/NewStopForm";
export default function FormsContainer({ ...props }) {
  return (
    <>
      <AccomsForm {...props}/>
      {/* <NewStopForm activeForm={activeForm}/> */}
      {/* <PackListForm {...props}/> */}
    </>
  );
}
