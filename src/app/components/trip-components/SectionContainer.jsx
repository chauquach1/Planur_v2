import RevealSectionBtn from "../misc-components/RevealSectionBtn";
import { useState } from "react";
export default function SectionContainer({ children, category, id }) {
  const [showCategory, setShowCategory] = useState(true);
  const [btnText, setBtnText] = useState(true);
  const [arrowUp, setArrow] = useState(true);
  const buttonClicked = () => {
    setBtnText(!btnText);
    setShowCategory(!showCategory);
    setArrow(!arrowUp);
  };
  return (
    <div className="flex flex-col bg-peach-300 rounded-xl">
      <div className="flex flex-row w-full justify-between p-2 pe-10">
        <h1 className="font-bold text-lg text-white">{category}</h1>
        <RevealSectionBtn buttonClicked={buttonClicked} arrowUp={arrowUp} />
      </div>
      <div
        id={`${id}-section`}
        className={`${
          showCategory ? null : "hidden"
        } flex gap-1 p-4 bg-gray-100 rounded-b-xl flex-col`}
      >
        {children}
      </div>
    </div>
  );
}
