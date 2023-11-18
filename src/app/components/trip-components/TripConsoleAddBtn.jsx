import TestAddAccomBtn from '../test-components/TestAddAccomBtn';
import TestAddStopBtn from '../test-components/TestAddStopBtn';
import TestAddPackListBtn from '../test-components/TestAddPackListBtn';

export default function TripConsoleAddBtn({ activeTab, uuid, trip }) {

  let activeAddBtn = null
  switch (activeTab) {
    case "accommodations":
      activeAddBtn = <TestAddAccomBtn uuid={uuid} trip={trip}/>
      break;
    case "stops":
      activeAddBtn = <TestAddStopBtn uuid={uuid} trip={trip}/>
      break;
    case "packLists":
      activeAddBtn = <TestAddPackListBtn uuid={uuid} trip={trip}/>
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