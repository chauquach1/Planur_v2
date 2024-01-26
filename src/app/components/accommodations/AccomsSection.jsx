import { button } from "@nextui-org/react";
import SectionContainer from "../trip-components/SectionContainer";
import AccommodationsCard from "./AccommodationsCard";
import NewAccomsForm from "../accommodations/NewAccomsForm"
import fetchAllAccoms from "../../_utils/fetchAllAccoms";
import { useEffect, useState } from "react";
export default function AccomsSection({ ...props }) { 
  const [showCategory, setShowCategory] = useState(true);
  const [btnText, setBtnText] = useState(true);
  const [arrowUp, setArrow] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const buttonClicked = () => {
    setBtnText(!btnText);
    setShowCategory(!showCategory);
    setArrow(!arrowUp);
  };

  const addNewAccom = () => {
    props.setRequestType("POST");
    setShowForm(true);
  }

  useEffect(() => {
    const getAccoms = async () => {
      const accoms = await fetchAllAccoms(props.tripId)
      props.setAccomsIndex(accoms);
    }
    getAccoms();
  } , [props.tripId]);


  if (props.activeTab !== "Accommodations" && props.activeTab !== "Full Details") {
    return null;
  } else {
    return (
      <>
      <SectionContainer category="Accommodations" showCategory={showCategory} buttonClicked={buttonClicked} arrowUp={arrowUp} {...props}>
        <button className="me-auto text-blue-500 text-sm hover:text-blue-600" onClick={addNewAccom}>Add New Accommodation</button>
        {props.accoms.map((accom) => {
          return <AccommodationsCard key={accom.accomName} fetchedAccom={accom} {...props}/>;
        })}
      </SectionContainer>
      
      {/* Blank accommodation form for POST request to create new Accommodation */}
      <NewAccomsForm accom={{}} showForm={showForm} setShowForm={setShowForm} {...props} />
      </>
    );
  }
}
