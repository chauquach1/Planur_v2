import TripBanner from "../../components/trip-components/TripBanner";
import { cookies } from "next/headers";
import { createServerClient } from "@supabase/ssr";
import { getTrip } from "../../api/trip/route";
import TripDashboardClient from "../../components/trip-components/TripDashboardClient";

export default async function TripDashboardLayout({ params, children }) {
  // Get Trip Details with tripId
  const tripId = params.id;
  const response = await getTrip(tripId);
  const trip = response.trip;

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

  return (
    <div className="columns-1 flex flex-col w-full h-fit text-center items-center justify-center">
      <TripBanner uuid={uuid} tripDetails={trip}/>
      <TripDashboardClient uuid={uuid} tripId={tripId}/>
    </div>
  );
}
