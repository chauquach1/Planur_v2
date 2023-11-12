// "use client";
import TripBanner from "../../components/trip-components/TripBanner";
import TripConsole from "../../components/trip-components/TripConsole";
import Trip from "../../models/trip.js"
import { cookies } from "next/headers";
import connectMongoDB from "../../libs/mongo/mongodb";
import { createServerClient } from "@supabase/ssr";

// Get Trip Details with tripId
const getTripDetails = async (tripId) => {
  await connectMongoDB();
  const mongoTrip = await Trip.findById(tripId).lean().exec();
  return mongoTrip;
};

export default async function TripDashboardLayout({params}) {
  const tripId = params.id;
  const mongoTrip = await getTripDetails(tripId)
  const accomIds = mongoTrip.accommodations ? mongoTrip.accommodations.map(acc => acc) : [];
  const stopIds = mongoTrip.stops ? mongoTrip.stops.map(stop => stop) : [];
  const packListIds = mongoTrip.packList ? mongoTrip.packList.map(list => list) : [];
  // mongoTrip._id = mongoTrip._id.toString();
  // mongoTrip.accommodations = mongoTrip.accommodations ? mongoTrip.accommodations.map(acc => acc.toString()) : [];
  // mongoTrip.stops = mongoTrip.stops ? mongoTrip.stops.map(stop => stop.toString()) : [];
  // mongoTrip.packList = mongoTrip.packList ? mongoTrip.packList.map(list => list.toString()) : [];

  const tripBannerDetails = {
    tripId,
    tripName: mongoTrip.tripName,
    startDate: mongoTrip.startDate,
    endDate: mongoTrip.endDate,
    destination: mongoTrip.destination,
    address: mongoTrip.address,
    guests: mongoTrip.guests,
    reason: mongoTrip.reason,
    transportation: mongoTrip.transportation
  }

  const tripConsoleDetails = {
    tripId,
    accomIds: mongoTrip.accommodations = mongoTrip.accommodations ? mongoTrip.accommodations.map(acc => acc.toString()) : [],
    stopIds: mongoTrip.stops = mongoTrip.stops ? mongoTrip.stops.map(stop => stop.toString()) : [],
    packListIds: mongoTrip.packList = mongoTrip.packList ? mongoTrip.packList.map(list => list.toString()) : []
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
