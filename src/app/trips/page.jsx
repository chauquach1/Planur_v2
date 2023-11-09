import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";
import connectMongoDB from "../libs/mongo/mongodb.js";
import User from "../models/user.js";
import Link from "next/link.js";
import TripIndexCard from "../components/trip-components/trip-index-card.jsx";

async function getMongoData(uuid) {
  await connectMongoDB();
  // Fetch the user from the MongoDB database using the UUID
  const user = await User.findOne({ uuid });
  return user; // Return the user data directly
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
  console.log("trips index user id:", user.id);

  const mongoData = await getMongoData(user.id);
  let tripIds = mongoData.trips.map(trip => (trip._id).toString());
  // console.log("user id:", user.id);
  // console.log('mongodata:',mongoData);
  // console.log('tripIds array', tripIds);


  return (
    <>
      <h1 className="underline">Trips Index</h1>
      <div className="container flex flex-row flex-wrap border border-solid gap-2 p-2 border-white">
        {mongoData ? (
          <>
          {tripIds.map((tripId) => (
              <TripIndexCard tripId={tripId} uuid={user.id} key={tripId}/>
          ))}
          </>
        ): (
          <h1>no trips</h1>
        )}
      </div>
    </>
  );
}