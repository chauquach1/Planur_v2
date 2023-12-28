import PackListForm from "../../packlist/PacklistForm"
import NewAccomsForm from "../../accommodations/NewAccomsForm";
import NewStopForm from "../../stops/NewStopForm";
export default function FormsContainer({ ...props }) {
  return (
    <>
      <PackListForm {...props}/>
      {/* <NewStopForm activeForm={activeForm}/> */}
      {/* <NewAccomsForm activeForm={activeForm}/> */}
    </>
  );
}
