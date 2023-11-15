import mongoClient from "../libs/mongo/mongodb";
import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";
import TripIndexCard from "../components/trip-components/TripCard.jsx";

export default async function TripsIndex() {
  const client = await mongoClient();
  const db = client.db("planur_v2");
  const usersCollection = db.collection("users");
  const tripsCollection = db.collection("trips");

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

  const uuid = user.id;

  const mongoUserData = await usersCollection.findOne({ uuid: uuid });
  const mongoUserTripsIds = mongoUserData.trips;
  const tripsArray = await tripsCollection
    .find({ _id: { $in: mongoUserTripsIds } })
    .toArray();

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
