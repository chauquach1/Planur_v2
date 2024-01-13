import PackListForm from "../../packlist/PacklistForm"
import NewAccomsForm from "../../accommodations/NewAccomsForm";
import NewStopForm from "../../stops/NewStopForm";
export default function FormsContainer({ ...props }) {
  return (
    <>
      <NewAccomsForm {...props}/>
      {/* <NewStopForm activeForm={activeForm}/> */}
      {/* <PackListForm {...props}/> */}
    </>
  );
}
