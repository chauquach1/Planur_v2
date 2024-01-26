export default function SideContainer({children}) {
  return (
    <div
      id="content-panel-side"
      className={`hidden right-0 top-0 mx-auto
      lg:flex flex-col h-full w-full md:max-w-[325px] lg:max-w-[400px] xl:max-w-[500px] 2xl:max-w-[600px] py-4 px-4 bg-slate-300 rounded-tl-xl ms-2`}
    >
      {children}
    </div>
  );
}
