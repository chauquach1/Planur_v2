import RevealSectionBtn from "../misc-components/RevealSectionBtn";
import { useState } from "react";
export default function SectionContainer({ children, ...props}) {
  return (
    <div className="flex flex-col bg-peach-300 rounded-xl">
      <RevealSectionBtn {...props} />
      <div
        id={`${props.category}-section`}
        className={`${
          props.showCategory ? null : "hidden"
        } flex gap-3 p-4 bg-gray-100 rounded-b-xl flex-col`}
      >
        {children}
      </div>
    </div>
  );
}
