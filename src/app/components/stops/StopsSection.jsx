import SectionContainer from "../trip-components/SectionContainer";
import StopsCard from "./StopsCard";
import fetchAllStops from "../../_utils/stopsRequestsIndex";
import { useState, useEffect } from "react";
export default function StopsSection({tripProps, stopProps, requestProps, displayProps, ...props}) {
  const [showCategory, setShowCategory] = useState(true);
  const [btnText, setBtnText] = useState(true);
  const buttonClicked = () => {
    setBtnText(!btnText);
    setShowCategory(!showCategory);
  };

  const addNewStop = () => {
    requestProps.setRequestType("POST");
    stopProps.setActiveStop({});
    stopProps.setShowStopForm(true);
  }

  useEffect(() => {
    console.log('stopProps.stopsIndex', stopProps.stopsIndex);
  }), [stopProps.stopsIndex]

  useEffect(() => {
    const getStops = async () => {
      const stops = await fetchAllStops(props.tripId)
      stopProps.setStopsIndex(stops);
    }
    getStops();
  } , [props.tripId]);
  
  if (displayProps.tripDisplayTab !== "Stops" && displayProps.tripDisplayTab !== "Full Details") {
    return null;
  } else {
    return (
      <SectionContainer category="Stops"  showCategory={showCategory} buttonClicked={buttonClicked} arrowUp={showCategory} {...props}>
        <button className="me-auto text-blue-500 text-sm hover:text-blue-600" onClick={addNewStop}>Add New Stop</button>
        {stopProps.stopsIndex.map((stop) => {
          return (
            <StopsCard
              key={stop.stopName}
              fetchedStop={stop}
              displayProps={displayProps}
              tripProps={tripProps}
              requestProps={requestProps}
              stopProps={stopProps}
              {...props}
            />
          );
        })}
      </SectionContainer>
    );
  }
}
