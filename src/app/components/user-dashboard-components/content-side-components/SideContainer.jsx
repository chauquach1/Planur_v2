import FormsContainer from "./FormsContainer"

export default function SideContainer() {
  return (
    <div
      id="content-panel-side"
      className="hidden md:flex flex-col w-full h-full lg:max-w-[600px] justify-start bg-bismark-300"
    >
      <FormsContainer />
    </div>
  );
}
