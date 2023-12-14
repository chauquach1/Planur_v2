import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@nextui-org/react";

export default function CategoryBtn({children}) {
  return (
    <div className="w-full h-fit p-2 bg-white rounded-xl">
      {children}
    </div>
  );
}