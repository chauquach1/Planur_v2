import FormsContainer from "./FormsContainer"
import SideNavFormSelect from "./SideNavFormSelect";
import { useEffect, useState } from "react";
export default function SideContainer({trip}) {
  const [activeForm, setActiveForm] = useState('packList');
  return (
    <div
      id="content-panel-side"
      className="hidden lg:flex flex-col h-full w-full md:max-w-[325px] lg:max-w-[400px] xl:max-w-[500px] 2xl:max-w-[600px] py-4 px-4 gap-4 bg-slate-300 rounded-tl-xl ms-2 justify-start"
    >
      <SideNavFormSelect activeForm={activeForm} setActiveForm={setActiveForm}/>
      <FormsContainer activeForm={activeForm} tripId={trip._id}/>
    </div>
  );
}
