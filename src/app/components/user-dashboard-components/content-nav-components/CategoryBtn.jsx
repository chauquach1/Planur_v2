import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@nextui-org/react";

export default function CategoryBtn({children}) {
  return (
    <button className=" bg-white py-1 px-2 rounded-xl text-xs text-center">
      {children}
    </button>
  );
}