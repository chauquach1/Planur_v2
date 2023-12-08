export default function Loading() {
  return (
    <main className="container flex flex-row h-screen min-w-full gap-1 bg-slate-400 justify-center">
      <div
        id="content-navigation"
        className=" flex flex-col h-full rounded-l-none rounded-xl w-full bg-gray-300"
      >
        <div className="flex flex-row gap-2 h-screen bg-white">
          <div className="flex flex-col w-[380px] bg-slate-200 rounded-r-xl">
            <div className=" text-center text-xl h-[100px] p-2">
              <h1 className="leading-tight">
                
              </h1>
            </div>
            
            <div
              id="trip-cards-container"
              className="grid-flow-col mb-3 gap-2 overflow-y-scroll p-3"
            >
            </div>
          </div>

          <div
            id="content-container"
            className="column flex flex-col w-screen h-full rounded-r-none rounded-xl bg-gray-300"
          >
            <div
              id="content-header"
              className="flex flex-row w-full h-[100px] bg-peach-300 rounded-tl-xl"
            ></div>
            <div id="content-body" className="flex flex-row w-full h-full ">
              <div
                id="content-panel-main"
                className="w-full md:basis-3/4 h-full"
              ></div>
              <div
                id="content-panel-side"
                className="hidden md:block md:basis-1/4 col-span-1 h-full bg-bismark-200"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
