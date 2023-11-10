import { Button } from "@nextui-org/react";

export default function TabButton({  activeTab, tabText, tabName }) {

  return (
    <Button
      className={`transition-opacity ${
        activeTab === tabName
          ? "bg-blue-500 text-white"
          : "bg-gray-200 text-black"
      }`}
      // onClick={() => handleTabClick(tabName)}
      // aria-selected={activeTab === tabName}
      role="tab"
      type="button"
      size="sm"
      radius="lg"
      aria-selected={activeTab === tabName}
    >
      {tabText}
    </Button>
  );
}