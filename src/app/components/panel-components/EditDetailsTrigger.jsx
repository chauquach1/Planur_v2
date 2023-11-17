import EditAccomsForm from "../form-components/EditAccomForm";
import EditStopForm from "../form-components/EditStopForm";
import EditPackListForm from "../form-components/EditPackListForm";

export default function EditDetailsTrigger({ currCardData, currCardType }) {

  if (currCardData === null || currCardData === undefined) {
    return <></>;
  } else if (currCardData && currCardType === "accommodations") {
    return (
      <EditAccomsForm currCardData={currCardData} currCardType={currCardType} />
    );
  } else if (currCardData && currCardType === "stops") {
    return (
      <EditStopForm currCardData={currCardData} currCardType={currCardType} />
    );
  } else if (currCardData && currCardType === "packLists") {
    return (
      <EditPackListForm
        currCardData={currCardData}
        currCardType={currCardType}
      />
    );
  }
}
