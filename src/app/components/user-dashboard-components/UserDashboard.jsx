import ContentNavContainer from "./content-nav-components/ContentNavContainer";
export default function UserDashboard({ userData }) {
  return (
    <div className="flex flex-row w-full h-full gap-1 bg-slate-400">
      <div
        id="content-navigation"
        className="container flex flex-col basis-1/4 h-full rounded-l-none rounded-xl bg-gray-300"
      >
        <div className="container text-center text-xl  h-[100px] ">
          <h1>
            {userData.firstName} {userData.lastName}'s Planur
          </h1>
        </div>
        <ContentNavContainer />
      </div>
      <div
        id="content-container"
        className="column flex flex-col w-screen h-full rounded-r-none rounded-xl bg-gray-300"
      >
        <div
          id="content-header"
          className="flex flex-row w-full h-[100px] bg-peach-500 rounded-tl-xl"
        ></div>
        <div id="content-body" className="flex flex-row w-full h-full ">
          <div
            id="content-panel-main"
            className="w-full md:basis-3/4 h-full"
          ></div>
          <div
            id="content-panel-side"
            className="hidden md:block md:basis-1/4 col-span-1 h-full bg-bismark-600"
          ></div>
        </div>
      </div>
    </div>
  );
}
