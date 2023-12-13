import FormsContainer from "./FormsContainer"

export default function SideContainer() {
  return (
    <div
      id="content-panel-side"
      className="hidden lg:flex flex-col w-full h-full md:max-w-[325px] lg:max-w-[400px] xl:max-w-[500px] 2xl:max-w-[600px] justify-start bg-bismark-300"
    >
      <FormsContainer />
    </div>
  );
}
