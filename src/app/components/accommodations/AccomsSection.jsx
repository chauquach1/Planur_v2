import { button } from "@nextui-org/react";
import SectionContainer from "../trip-components/SectionContainer";
import AccommodationsCard from "./AccommodationsCard";
import { useState } from "react";
export default function AccomsSection({ ...props }) {
  const [showCategory, setShowCategory] = useState(true);
  const [btnText, setBtnText] = useState(true);
  const [arrowUp, setArrow] = useState(true);
  const buttonClicked = () => {
    setBtnText(!btnText);
    setShowCategory(!showCategory);
    setArrow(!arrowUp);
  };
  

  if (props.activeTab !== "Accommodations" && props.activeTab !== "Full Details") {
    return null;
  } else {
    return (
      <SectionContainer category="Accommodations" showCategory={showCategory} buttonClicked={buttonClicked} arrowUp={arrowUp} {...props}>
        {props.accoms.map((accom) => {
          return <AccommodationsCard key={accom.accomName} accom={accom} {...props}/>;
        })}
      </SectionContainer>
    );
  }
}
