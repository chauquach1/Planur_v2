import SectionContainer from "../trip-components/SectionContainer";
import StopsCard from "./StopsCard";
import { useState } from "react";
export default function StopsSection({displayProps, ...props}) {
  const [showCategory, setShowCategory] = useState(true);
  const [btnText, setBtnText] = useState(true);
  const buttonClicked = () => {
    setBtnText(!btnText);
    setShowCategory(!showCategory);
  };

  const addNewStop = () => {
    requestProps.setRequestType("POST");
    accomProps.setActiveAccom({});
    accomProps.setShowAccomForm(true);
  }
  
  if (displayProps.tripDisplayTab !== "Stops" && displayProps.tripDisplayTab !== "Full Details") {
    return null;
  } else {
    return (
      <SectionContainer category="Stops"  showCategory={showCategory} buttonClicked={buttonClicked} arrowUp={showCategory} {...props}>
        <button className="me-auto text-blue-500 text-sm hover:text-blue-600" onClick={addNewStop}>Add New Accommodation</button>
        {props.stops.map((stop) => {
          return <StopsCard key={stop.stopName} stop={stop} />;
        })}
      </SectionContainer>
    );
  }
}
