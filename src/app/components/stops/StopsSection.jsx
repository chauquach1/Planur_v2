import SectionContainer from "../trip-components/SectionContainer";
import StopsCard from "./StopsCard";
import { useState } from "react";
export default function StopsSection({...props}) {
  const [showCategory, setShowCategory] = useState(true);
  const [btnText, setBtnText] = useState(true);
  const [arrowUp, setArrow] = useState(true);
  const buttonClicked = () => {
    setBtnText(!btnText);
    setShowCategory(!showCategory);
    setArrow(!arrowUp);
  };
  if (props.activeTab !== "Stops" && props.activeTab !== "Full Details") {
    return null;
  } else {
    return (
      <SectionContainer category="Stops"  showCategory={showCategory} buttonClicked={buttonClicked} arrowUp={arrowUp} {...props}>
        {props.stops.map((stop) => {
          return <StopsCard key={stop.stopName} stop={stop} />;
        })}
      </SectionContainer>
    );
  }
}
