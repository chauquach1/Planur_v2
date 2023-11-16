'use client'
import TabButton from "../../components/trip-components/TabButton";
import { useState } from "react";

export default function TabButtonsContainer({activeTab, handleTabClick}) {

  return (
    <>
      {/* Accommodations Tab */}
      <TabButton
        activeTab={activeTab}
        tabName="accommodations"
        onPress={() => handleTabClick("accommodations")}
      />

      {/* Stops Tab */}
      <TabButton
        activeTab={activeTab}
        tabName="stops"
        onPress={() => handleTabClick("stops")}
      />

      {/* Packing List Tab */}
      <TabButton
        activeTab={activeTab}
        tabName="packLists"
        onPress={() => handleTabClick("packLists")}
      />
    </>
  );
}