import PackListForm from "../../packlist/PacklistForm"
import NewAccomsForm from "../../accommodations/NewAccomsForm";
import NewStopForm from "../../stops/NewStopForm";
export default function FormsContainer({ activeForm }) {
  return (
    <>
      <PackListForm activeForm={activeForm}/>
      <NewStopForm activeForm={activeForm}/>
      <NewAccomsForm activeForm={activeForm}/>
    </>
  );
}
