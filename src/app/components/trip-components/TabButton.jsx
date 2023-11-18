import { Button } from "@nextui-org/react";

export default function TabButton({ activeTab, tabName, onPress }) {
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
        activeTab === tabName ? "bg-gray-400 text-white shadow-sm" : "bg-gray-200 font-light text-black"
      }`}
      aria-selected={activeTab === tabName}
      variant={activeTab === tabName ? "solid" : "flat"}
      role="tab"
      type="button"
      size="sm"
      radius="lg"
      onPress={onPress}
    >
      {tabText}
    </Button>
  );
}
