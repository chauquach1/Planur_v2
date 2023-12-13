import { cn } from "@nextui-org/react"

export default function SectionContainer({children, category}) {
  return (
    <>
      <h1 className="font-bold">{category}</h1>
      <div id={`${category}-section`} className="flex flex-col gap-1 xl:px-4 2xl:px-6">
        {children}
      </div>
    </>
  );
}
