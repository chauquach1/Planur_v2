import AddAccommodationsBtn from "../../components/trip-components/AddAccommodationsBtn";
import AddStopBtn from "../../components/trip-components/AddStopBtn";
import AddPackingListBtn from "../../components/trip-components/AddPackingListBtn";
{/* <AddAccommodationsBtn uuid={uuid} trip={trip}/>
<AddStopBtn uuid={uuid} trip={trip}/>
<AddPackingListBtn uuid={uuid} trip={trip}/> */}

export default function TripConsoleAddBtn({ activeTab, uuid, trip }) {

  let activeAddBtn = null
  switch (activeTab) {
    case "accommodations":
      activeAddBtn = <AddAccommodationsBtn uuid={uuid} trip={trip}/>
      break;
    case "stops":
      activeAddBtn = <AddStopBtn uuid={uuid} trip={trip}/>
      break;
    case "packList":
      activeAddBtn = <AddPackingListBtn uuid={uuid} trip={trip}/>
      break;
    default:
      break;
  }
  return (
    <>
      {activeAddBtn}
    </>
  );
}