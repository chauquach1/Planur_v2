'use client'
import TabButton from "../../components/trip-components/TabButton";
import { useState } from "react";

export default function TabButtonsContainer() {
  const [activeTab, setActiveTab] = useState("accommodations");

  const handleTabClick = (tabName) => {
    console.log("clicked on tab: ", tabName);
    setActiveTab(tabName);
  };

  return (
    <>
      {/* Accommodations Tab */}
      <TabButton
        activeTab={activeTab}
        tabName="accommodations"
        onClick={() => handleTabClick("accommodations")}
      />

      {/* Stops Tab */}
      <TabButton
        activeTab={activeTab}
        tabName="stops"
        onClick={() => handleTabClick("stops")}
      />

      {/* Packing List Tab */}
      <TabButton
        activeTab={activeTab}
        tabName="packLists"
        onClick={() => handleTabClick("packLists")}
      />
    </>
  );
}