import NewAccomsForm from "../../accommodations/NewAccomsForm";
import NewStopForm from "../../stops/NewStopForm";
import { useEffect } from "react";
export default function SideContainer({displayProps, tripProps, stopProps, requestProps, accomProps, packListProps}) {
  // useEffect(() => {
  //   console.log('accomProps', accomProps);
  // },[]);

  return (
    <div
      id="content-panel-side"
      className={`hidden right-0 top-0 mx-auto
      lg:flex flex-col h-full w-full md:max-w-[325px] lg:max-w-[400px] xl:max-w-[500px] 2xl:max-w-[600px] py-4 px-4 bg-slate-300 rounded-tl-xl ms-2`}
    >
      <NewAccomsForm displayProps={displayProps} tripProps={tripProps} requestProps={requestProps} accomProps={accomProps} />
      <NewStopForm displayProps={displayProps} tripProps={tripProps} requestProps={requestProps} stopProps={stopProps} />
    </div>
  );
}
