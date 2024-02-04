import SectionContainer from "../trip-components/SectionContainer";
import AccommodationsCard from "./AccommodationsCard";
import fetchAllAccoms from "../../_utils/fetchAllAccoms";
import { useEffect, useState } from "react";

export default function AccomsSection({ displayProps, tripProps, requestProps, accomProps, ...props }) { 
  const [showCategory, setShowCategory] = useState(true);
  const [btnText, setBtnText] = useState(true);
  const buttonClicked = () => {
    setBtnText(!btnText);
    setShowCategory(!showCategory);
  };

  const addNewAccom = () => {
    requestProps.setRequestType("POST");
    accomProps.setActiveAccom({});
    accomProps.setShowAccomForm(true);
  }

  useEffect(() => {
    console.log('accomProps.accomsIndex', accomProps.accomsIndex);
  }), [accomProps.accomsIndex]

  useEffect(() => {
    const getAccoms = async () => {
      const accoms = await fetchAllAccoms(props.tripId)
      accomProps.setAccomsIndex(accoms);
    }
    getAccoms();
  } , [props.tripId]);


  if (displayProps.tripDisplayTab !== "Accommodations" && displayProps.tripDisplayTab !== "Full Details") {
    return null;
  } else {
    return (
      <>
      <SectionContainer category="Accommodations" showCategory={showCategory} buttonClicked={buttonClicked} arrowUp={showCategory} {...props}>
        <button className="me-auto text-blue-500 text-sm hover:text-blue-600" onClick={addNewAccom}>Add New Accommodation</button>
        {accomProps.accomsIndex.map((accom) => {
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
        })}
      </SectionContainer>
      </>
    );
  }
}
