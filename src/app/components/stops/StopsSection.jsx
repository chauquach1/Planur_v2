import SectionContainer from "../trip-components/SectionContainer";
import StopsCard from "./StopsCard";
import { useState } from "react";
export default function StopsSection({displayProps, ...props}) {
  const [showCategory, setShowCategory] = useState(false);
  const [btnText, setBtnText] = useState(true);
  const [arrowUp, setArrow] = useState(false);
  const buttonClicked = () => {
    setBtnText(!btnText);
    setShowCategory(!showCategory);
    setArrow(!arrowUp);
  };
  if (displayProps.tripDisplayTab !== "Stops" && displayProps.tripDisplayTab !== "Full Details") {
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
