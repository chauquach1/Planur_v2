import { Button } from "@nextui-org/react";

export default function TabButton({ activeTab, tabName, onClick }) {
  let tabText;
  switch (tabName) {
    case "accommodations":
      tabText = "Accommodations";
      break;
    case "stops":
      tabText = "Stops";
      break;
    case "packLists":
      tabText = "Packing List";
      break;
    default:
      break;
  }

  return (
    <Button
      className={`transition-opacity ${
        activeTab === tabName ? "bg-blue-500 text-white" : "bg-gray-200 text-black"
      }`}
      aria-selected={activeTab === tabName}
      role="tab"
      type="button"
      size="sm"
      radius="lg"
      onClick={onClick}
    >
      {tabText}
    </Button>
  );
}
