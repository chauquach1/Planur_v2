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
    <>
      <div className="flex flex-row w-full justify-between border-y-2 py-4 pe-10">
        <h1 className="font-bold text-xl">{category}</h1>
        <RevealSectionBtn buttonClicked={buttonClicked} arrowUp={arrowUp} />
      </div>
      <div
        id={`${id}-section`}
        className={`${showCategory ? null : "hidden"} flex gap-1 xl:px-4 2xl:px-6 flex-col`}
      >
        {children}
      </div>
    </>
  );
}
