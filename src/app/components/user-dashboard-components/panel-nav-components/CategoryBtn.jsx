import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@nextui-org/react";

export default function CategoryBtn( {...props} ) {
  return (
    <button onClick={() => props.setActiveTab(props.category)} className={`${props.activeTab === props.category || props.activeTab === "Full Detail" ? "bg-peach-400 text-white" : "bg-white"} py-1 px-2 rounded-xl text-xs text-center shadow-md`}>
      {props.category}
    </button>
  );
}