import TripBanner from "../../components/trip-components/TripBanner";
import TripConsole from "../../components/trip-components/TripConsole";
import { cookies } from "next/headers";
import { createServerClient } from "@supabase/ssr";
import { getTrip } from "../../api/trip/route";

export default async function TripDashboardLayout({params}) {
  // Get Trip Details with tripId
  const tripId = params.id;
  const trip = await getTrip(tripId);

  const tripBannerDetails = {
    tripId,
    tripName: trip.tripName,
    startDate: trip.startDate,
    endDate: trip.endDate,
    destination: trip.destination,
    address: trip.address,
    guests: trip.guests,
    reason: trip.reason,
    transportation: trip.transportation
  }

  const tripConsoleDetails = {
    tripId,
    accomIds: trip.accommodations = trip.accommodations ? trip.accommodations.map(acc => acc.toString()) : [],
    stopIds: trip.stops = trip.stops ? trip.stops.map(stop => stop.toString()) : [],
    packListIds: trip.packList = trip.packList ? trip.packList.map(list => list.toString()) : []
  }


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


  

  return (
    <div className="columns-1 flex flex-col w-full h-fit text-center items-center justify-center">
      <TripBanner tripBannerDetails={tripBannerDetails}/>
      <TripConsole tripConsoleDetails={tripConsoleDetails}/>
    </div>
  );
}
