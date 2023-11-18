import EditAccomsForm from "../form-components/EditAccomForm";
import EditStopForm from "../form-components/EditStopForm";
import EditPackListForm from "../form-components/EditPackListForm";

export default function EditDetailsTrigger({
  uuid,
  tripId,
  currCardData,
  currCardType,
  handleUpdateForm,
}) {
  if (currCardData === null || currCardData === undefined) {
    return <></>;
  } else if (currCardData && currCardType === "accommodations") {
    return (
      <EditAccomsForm
        uuid={uuid}
        tripId={tripId}
        currCardData={currCardData}
        currCardType={currCardType}
        handleUpdateForm={handleUpdateForm}
      />
    );
  } else if (currCardData && currCardType === "stops") {
    return (
      <EditStopForm
        uuid={uuid}
        tripId={tripId}
        currCardData={currCardData}
        currCardType={currCardType}
        handleUpdateForm={handleUpdateForm}
      />
    );
  } else if (currCardData && currCardType === "packLists") {
    return (
      <EditPackListForm
        uuid={uuid}
        tripId={tripId}
        currCardData={currCardData}
        currCardType={currCardType}
        handleUpdateForm={handleUpdateForm}
      />
    );
  }
}
