import TripBanner from "../../components/trip-components/TripBanner";
import TripDashboardClient from "../../components/trip-components/TripDashboardClient";
import mongoClient from "../../libs/mongo/mongodb";
import { ObjectId } from "mongodb";
import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

async function getSupabaseUser() {
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

  return await supabase.auth.getUser();
}

async function fetchTrip(tripId) {
  if (!tripId) {
    console.error("no tripId from params");
    return <div>no tripId from params</div>;
  }

  const response = await fetch('http://localhost:3000/api/trip/' + tripId);

  if(!response.ok) {
    console.error("response not ok");
  }

  const data = await response.json();
  return data;
}

export default async function TripDashboardLayout({ params }) {

  try {
    const { data: { user } } = await getSupabaseUser();

    if (!user) {
      return <div className="flex gap-4 items-center">Not logged in</div>;
    }

    const tripData = await fetchTrip(params.id);
    console.log("tripData:", tripData);
    
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
