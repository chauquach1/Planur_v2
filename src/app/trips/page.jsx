import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";
import connectMongoDB from "../libs/mongo/mongodb.js";
import User from "../models/user.js";
import Link from "next/link.js";
import TripIndexCard from "../components/trip-components/TripCard.jsx";
import { getAllTrips } from "../api/tripsindex/route";

export default async function TripsIndex() {
  const cookieStore = cookies();

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    {
      cookies: {
        get(name) {
          return cookieStore.get(name)?.value;
        },
      },
    }
  );

  // Use Supabase to get the current user
  const {
    data: { user },
  } = await supabase.auth.getUser();
  // console.log("trips index user id:", user.id);

  const tripsArray = await getAllTrips(user.id);
  // console.log(tripsArray.length);
  // console.log("trips array from trips .page.jsx:", tripsArray);
  // let tripIds = tripsArray.map(trip => (trip._id).toString());

  return (
    <>
      <h1 className="underline">Trips Index</h1>
      <div className="container flex flex-row flex-wrap border border-solid gap-2 p-2 border-white">
        {tripsArray ? (
          <>
            {tripsArray.map((trip) => (
              // (trip._id).toString(),
              // (trip.startDate).toString(),
              // (trip.endDate).toString(),
              // (trip.tripName).toString(),
              <TripIndexCard trip={trip._id} tripName={trip.tripName} startDate={trip.startDate.toString()} endDate={trip.endDate.toString()} key={trip._id} />
            ))}
          </>
        ) : (
          <h1>no trips</h1>
        )}
      </div>
    </>
  );
}
