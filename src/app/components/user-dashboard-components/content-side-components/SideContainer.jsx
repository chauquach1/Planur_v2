import FormsContainer from "./FormsContainer"

export default function SideContainer() {
  return (
    <div
      id="content-panel-side"
      className="hidden md:block md:basis-2/5 col-span-1 h-full bg-bismark-300"
    >
      <FormsContainer />
    </div>
  );
}
