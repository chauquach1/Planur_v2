import FormsContainer from "./FormsContainer"
import SideNavFormSelect from "./SideNavFormSelect";
import { useEffect, useState } from "react";
export default function SideContainer() {
  const [activeForm, setActiveForm] = useState('accommodation');
  useEffect(() => {
    console.log("activeForm: ", activeForm);
  }, [activeForm]);
  return (
    <div
      id="content-panel-side"
      className="hidden lg:flex flex-col w-full h-full md:max-w-[325px] lg:max-w-[400px] xl:max-w-[500px] 2xl:max-w-[600px] p-2 gap-2 justify-start bg-bismark-300"
    >
      <SideNavFormSelect activeForm={activeForm} setActiveForm={setActiveForm}/>
      <FormsContainer activeForm={activeForm}/>
    </div>
  );
}
