import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";
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

  const tripsArray = await getAllTrips(user.id);

  return (
    <>
      <h1 className="underline">Trips Index</h1>
      <div className="container flex flex-row flex-wrap border border-solid gap-2 p-2 border-white">
        {tripsArray ? (
          <>
            {tripsArray.map((trip) => (
              <TripIndexCard tripId={trip._id} tripName={trip.tripName} startDate={trip.startDate.toString()} endDate={trip.endDate.toString()} key={trip._id} />
            ))}
          </>
        ) : (
          <h1>no trips</h1>
        )}
      </div>
    </>
  );
}
