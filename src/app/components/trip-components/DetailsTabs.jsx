import { Button } from "@nextui-org/react";

export default function DetailsTabs( ) {
  const [activeTab, setActiveTab] = useState("accommodations");

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
    console.log("clicked on tab: ", tabId);
  };


  return (
    <div
      className="border rounded-2xl p-2 w-[400px] justify-between inline-flex"
      aria-label="Dynamic tabs"
    >
      {/* Accommodations Tab */}
      <Button
        className={`transition-opacity ${
          activeTab === "accommodations"
            ? "bg-blue-500 text-white"
            : "bg-gray-200 text-black"
        }`}
        onClick={() => handleTabClick("accommodations")}
        aria-selected={activeTab === "accommodations"}
        role="tab"
        type="button"
        size="sm"
        radius="lg"
      >
        Accommodations
      </Button>

      {/* Stops Tab */}
      <Button
        className={`transition-opacity ${
          activeTab === "stops"
            ? "bg-blue-500 text-white"
            : "bg-gray-200 text-black"
        }`}
        onClick={() => handleTabClick("stops")}
        aria-selected={activeTab === "stops"}
        role="tab"
        type="button"
        size="sm"
        radius="lg"
      >
        Stops
      </Button>

      {/* Packing List Tab */}
      <Button
        className={`transition-opacity ${
          activeTab === "packLists"
            ? "bg-blue-500 text-white"
            : "bg-gray-200 text-black"
        }`}
        onClick={() => handleTabClick("packLists")}
        aria-selected={activeTab === "packLists"}
        role="tab"
        type="button"
        size="sm"
        radius="lg"
      >
        Packing List
      </Button>
    </div>
  );
}
