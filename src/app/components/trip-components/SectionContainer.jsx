import { set } from "date-fns";
import { useState } from "react";
export default function SectionContainer({ children, category, id }) {
  const [showCategory, setShowCategory] = useState(true);
  const [btnText, setBtnText] = useState(true);
  const buttonClicked = () => {
    setBtnText(!btnText);
    setShowCategory(!showCategory);
  };
  return (
    <>
      <div className="flex flex-row w-full justify-between border-y-2 py-4 pe-10">
        <h1 className="font-bold text-xl">{category}</h1>
        <button onClick={() => buttonClicked()} className="">
          {btnText ? `Collapse ${category}` : `Show ${category}`}
        </button>
      </div>
      <div
        id={`${id}-section`}
        className={`${
          showCategory ? null : "hidden"
        } flex gap-1 xl:px-4 2xl:px-6 ${
          id === "emergency-contact"
            ? "flex-row flex-wrap justify-start px-0"
            : "flex-col"
        }`}
      >
        {children}
      </div>
    </>
  );
}
