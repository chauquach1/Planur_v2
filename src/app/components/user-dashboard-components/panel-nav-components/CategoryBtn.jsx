import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@nextui-org/react";
import { useEffect } from "react";
export default function CategoryBtn( {displayProps, ...props} ) {
  // useEffect(() => {
  //     console.log('PanelNavContainer displayProps', displayProps);
  //   }, []);
  return (
    <button
      onClick={() => displayProps.setTripDisplayTab(props.category)}
      className={`${
        displayProps.tripDisplayTab === props.category || !displayProps.tripDisplayTab === "Full Details"
          ? "bg-peach-400 text-white"
          : "bg-white"
      } py-1 px-2 rounded-xl text-xs text-center shadow-md`}
    >
      {props.category}
    </button>
  );
}