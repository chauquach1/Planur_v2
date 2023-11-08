import { Link } from "@nextui-org/react";

export default async function NextTripBanner({tripid}) {
  
  return (
    <div
      id="welcome-container"
      className="container row sm:w-4/5 md:w-3/5 flex flex-col gap-2 sm:gap-1 rounded-lg bg-orange-500/10 text-white align-baseline text-start p-2 bg-info"
    >
      Upcoming Trip:
      <Link href={`/trip/${tripid}`}>
        <div
          id="upcoming-trip-container"
          className="container columns-1 flex flex-col border rounded-lg bg-orange-500/10 text-white justify-between items-center text-start text-lg bg-info p-2"
        >
          <div className="container flex-row flex-wrap text-gray-600 font-extrabold text-4xl">
            <p>XXXXXXXX XXXXXXX</p>
            <p className="text-medium">12/11/2024 - 12/20/2024</p>
          </div>

          <div className="container row w-full flex flex-row flex-wrap justify-center align-baseline text-center text-sm">
            <div className="container row w-full flex flex-row flex-wrap justify-around ">
              <p>Destination: Some City, Some State, Some Country</p>
            </div>
            <div className="container hidden row w-full md:flex flex-row flex-wrap justify-around ">
              <h3>Reason: Vacation</h3>
              <h3>Number of Stops: 4</h3>
              <h3>Number of POIs: 4</h3>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
