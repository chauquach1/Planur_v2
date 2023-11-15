import TripBanner from "../../components/trip-components/TripBanner";
import TripDashboardClient from "../../components/trip-components/TripDashboardClient";
import mongoClient from "../../libs/mongo/mongodb";
import { ObjectId } from "mongodb";
import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

async function getSupabaseUser(cookieStore) {
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

  return await supabase.auth.getUser();
}

async function getMongoTrip(uuid, tripId) {
  const client = await mongoClient();
  const db = client.db("planur_v2");
  const tripCollection = db.collection("trips");
  return await tripCollection.findOne({ _id: new ObjectId(tripId)});
}

export default async function TripDashboardLayout({ params }) {
  const cookieStore = cookies();
  
  try {
    const { data: { user } } = await getSupabaseUser(cookieStore);

    if (!user) {
      return <div className="flex gap-4 items-center">Not logged in</div>;
    }

    const tripData = await getMongoTrip(user.id, params.id);
    
    if (!tripData) {
      return <div className="flex gap-4 items-center">No trip found</div>;
    }

    return (
      <div className="columns-1 flex flex-col w-full h-fit text-center items-center justify-center">
        <TripBanner uuid={user.id} tripDetails={tripData} />
        <TripDashboardClient uuid={user.id} tripId={params.id} />
      </div>
    );
  } catch (error) {
    console.error("Error in TripDashboardLayout:", error);
    return <div className="flex gap-4 items-center">An error occurred</div>;
  }
}
