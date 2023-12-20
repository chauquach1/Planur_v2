import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@nextui-org/react";

export default function CategoryBtn({children}) {
  return (
    <div className="w-full h-fit bg-white rounded-xl text-xs text-center">
      {children}
    </div>
  );
}