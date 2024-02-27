import SectionContainer from "../trip-components/SectionContainer";
import StopsCard from "./StopsCard";
import fetchAllStops from "../../_utils/stopsRequestsIndex";
import sampleStops from "../../_tests_/sampleStops";
import { useState, useEffect } from "react";
export default function StopsSection({tripProps, stopProps, requestProps, displayProps, ...props}) {
  const [showCategory, setShowCategory] = useState(false);

  const addNewStop = () => {
    requestProps.setRequestType("POST");
    stopProps.setActiveStop({});
    stopProps.setShowStopForm(true);
  }

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
      <SectionContainer
        category="Stops"
        showCategory={showCategory}
        setShowCategory={setShowCategory}
        arrowUp={showCategory}
        {...props}
      >
        <button
          className="ms-auto text-blue-500 text-sm hover:text-blue-600"
          onClick={addNewStop}
        >
          Add New Stop
        </button>
        {stopProps.stopsIndex.length > 0 ? (
          stopProps.stopsIndex.map((stop) => {
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
          })
        ) : (
          <div className="text-center text-slate-500 text-lg">
            <p>No Stops Found</p>
          </div>
        )}
      </SectionContainer>
    );
  }
}
