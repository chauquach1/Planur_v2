import { set } from "date-fns";
import { useState } from "react";
export default function SectionContainer({children, category}) {
  const [showCategory, setShowCategory] = useState(true);
  const [btnText, setBtnText] = useState(true);
  const buttonClicked = () => {
    setBtnText(!btnText);
    setShowCategory(!showCategory);
  }
  return (
    <>
      <div className="flex flex-row w-full justify-between border-y-2 py-4 pe-10">
        <h1 className="font-bold text-2xl">{category}</h1>
        <button onClick={() => buttonClicked()} className="">{btnText ? `Collapse ${category}` :`Show ${category}`}</button>
      </div>
      <div
        id={`${category}-section`}
        className={`${showCategory ? 'flex' : 'hidden'} flex flex-col gap-1 xl:px-4 2xl:px-6`}
      >
        {children}
      </div>
    </>
  );
}
