import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@nextui-org/react";

export default function CategoryBtn({children}) {
  return (
    <div className="w-full h-40 bg-white rounded-xl">
      {children}
    </div>
  );
}