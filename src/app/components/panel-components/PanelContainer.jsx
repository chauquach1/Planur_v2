import AccomsPanel from "./AccomsPanel"
import StopsPanel from "./StopsPanel"
import PackListsPanel from "./PackListPanel"

export default function PanelContainer({ currCardData, currCardType }) {
  const data = currCardData;
  if (data === undefined || data === null) {
    return <></>;
  } else if (currCardType === "accommodations") {
    return (
      <AccomsPanel currCardData={currCardData} currCardType={currCardType} />
    );
  } else if (currCardType === 'stops') {
    return (
      <StopsPanel currCardData={currCardData} currCardType={currCardType} />
    );
  } else if (currCardType === 'packLists') {
    return (
      <PackListsPanel currCardData={currCardData} currCardType={currCardType} />
    );
  }


}
