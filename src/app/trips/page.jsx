import { user } from "@nextui-org/react";
import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";
import TripIndexCard from "../components/trip-components/TripCard.jsx";

const fetchTrips = async (userEmail) => {
  if (!userEmail) {
    console.error("no userEmail");
    return <div>no userEmail</div>;
  }
  const response = await fetch(`http://localhost:3000/api/tripsindex/${userEmail}`);

  if (!response.ok) {
    console.error("response not ok");
  }
  const data = await response.json();
  console.log('data', data);
  return data;
}

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

  if (!user) {
    return <div className="flex gap-4 items-center">Not logged in</div>;
  }

  const tripsArray = await fetchTrips(user.email);

  if (!tripsArray) {
    console.error("!allTrips");
    return <div>Error fetching trips from MongoDB</div>;
  }

  return (
    <>
      <h1 className="underline">Trips Index</h1>
      <div className="container flex flex-row flex-wrap gap-2 p-2 border-white">
        {tripsArray ? (
          <>
            {tripsArray.map((trip) => (
              <TripIndexCard
                tripId={trip._id}
                tripName={trip.tripName}
                tripStartDate={trip.tripStartDate}
                tripEndDate={trip.tripEndDate}
                key={trip._id}
              />
            ))}
          </>
        ) : (
          <h1>no trips</h1>
        )}
      </div>
    </>
  );
}
