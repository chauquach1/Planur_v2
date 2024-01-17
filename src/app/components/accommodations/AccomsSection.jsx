import { button } from "@nextui-org/react";
import SectionContainer from "../trip-components/SectionContainer";
import AccommodationsCard from "./AccommodationsCard";
import fetchAllAccoms from "../../_utils/fetchAllAccoms";
import { useEffect, useState } from "react";
export default function AccomsSection({ ...props }) {
  const [showCategory, setShowCategory] = useState(true);
  const [btnText, setBtnText] = useState(true);
  const [arrowUp, setArrow] = useState(true);
  const buttonClicked = () => {
    setBtnText(!btnText);
    setShowCategory(!showCategory);
    setArrow(!arrowUp);
  };

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
      <SectionContainer category="Accommodations" showCategory={showCategory} buttonClicked={buttonClicked} arrowUp={arrowUp} {...props}>
        <button className="me-auto text-blue-500 text-sm hover:text-blue-600" onClick={() => {props.setRequestType("POST"), props.setActiveAccom({})}}>Add New Accommodation</button>
        {props.accoms.map((accom) => {
          return <AccommodationsCard key={accom.accomName} accom={accom} {...props}/>;
        })}
      </SectionContainer>
    );
  }
}
