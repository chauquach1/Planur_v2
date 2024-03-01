import SectionContainer from "../trip-components/SectionContainer";
import StopsCard from "./StopsCard";
import fetchAllStops from "../../_utils/stopsRequestsIndex";
import sampleStops from "../../_tests_/sampleStops";
import { useState, useEffect } from "react";
export default function StopsSection({tripProps, stopProps, requestProps, displayProps, ...props}) {
  const [showCategory, setShowCategory] = useState(false);

  const { tripId } = tripProps;
  const { setActiveStop, setShowStopForm, stopsIndex, setStopsIndex } = stopProps;
  const { tripDisplayTab } = displayProps;

  const addNewStop = () => {
    requestProps.setRequestType("POST");
    setActiveStop({});
    setShowStopForm(true);
  }

  useEffect(() => {
    setShowCategory(false);
  }, [tripId]);

  useEffect(() => {
    const getStops = async () => {
      const stops = await fetchAllStops(props.tripId)
      setStopsIndex(stops);
    }
    getStops();
  } , [props.tripId]);
  
  if (tripDisplayTab !== "Stops" && tripDisplayTab !== "Full Details") {
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
        {stopsIndex.length > 0 ? (
          stopsIndex.map((stop) => {
            return (
              <StopsCard
                key={stop._id}
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
