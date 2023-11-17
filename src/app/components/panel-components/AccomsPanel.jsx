import { Button } from "@nextui-org/react"
import { useEffect, useState } from "react";

export default function AccomsPanel({ currCardData, currCardType, prevCardData, prevCardType }) {

  // const [panelTheme, setPanelTheme] = useState(currCardType);

  return (
    <>
      <div
        id="dashboard-panel-container"
        className="w-full bg-white columns-1 sm:flex flex-col justify-start text-start max-h-fit overflow-scroll items-center h-full"
      >
        <h1>Panel</h1>
        <h1>{currCardData._id}</h1>
        <p>{currCardData ? currCardData._id : "No current card data"}</p>
        <Button onClick={() => console.log(currCardType)}>Button</Button>
      </div>
    </>
  );
}
