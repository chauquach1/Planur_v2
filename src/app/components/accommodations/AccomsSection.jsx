import SectionContainer from "../trip-components/SectionContainer";
import AccommodationsCard from "./AccommodationsCard";
import fetchAllAccoms from "../../_utils/fetchAllAccoms";
import { useEffect, useState } from "react";

export default function AccomsSection({displayProps, tripProps, requestProps, accomProps, ...props }) { 
  const [showCategory, setShowCategory] = useState(false);

  const { tripId } = tripProps;
  const { setAccomsIndex, setShowAccomForm, setActiveAccom, accomsIndex } = accomProps;
  const { tripDisplayTab } = displayProps;

  const addNewAccom = () => {
    requestProps.setRequestType("POST");
    setActiveAccom({});
    setShowAccomForm(true);
  }
  const getAccoms = async () => {
    const accoms = await fetchAllAccoms(tripId)
    setAccomsIndex(accoms);
  }
  
  useEffect(() => {
    tripId !== undefined ? getAccoms() : null;
    setShowCategory(false);
  } , [tripId]);


  if (tripDisplayTab !== "Accommodations" && tripDisplayTab !== "Full Details") {
    return null;
  } else {
    return (
      <>
        <SectionContainer
          category="Accommodations"
          showCategory={showCategory}
          setShowCategory={setShowCategory}
          arrowUp={showCategory}
          {...props}
        >
          <button
            className="ms-auto text-blue-500 text-sm hover:text-blue-600"
            onClick={addNewAccom}
          >
            Add New Accommodation
          </button>
          {accomsIndex?.length > 0 ? 
            accomsIndex.map((accom) => {
              return (
                <AccommodationsCard
                  key={accom.accomName}
                  fetchedAccom={accom}
                  displayProps={displayProps}
                  tripProps={tripProps}
                  requestProps={requestProps}
                  accomProps={accomProps}
                  {...props}
                />
              );
            })
          : 
            <div className="text-center text-slate-500 text-lg">
              <p>No Accommodations Found</p>
            </div>
          }
        </SectionContainer>
      </>
    );
  }
}
