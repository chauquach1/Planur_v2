import NewAccomsForm from "../../accommodations/NewAccomsForm";
import NewStopForm from "../../stops/NewStopForm";
export default function FormContainer() {
  return (
    <div id="forms-container" className="flex flex-col p-3 h-full overflow-scroll">
      <NewAccomsForm />
    </div>
  );
}
