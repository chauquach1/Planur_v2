import TripBanner from "../../components/trip-components/TripBanner";
import TripDashboardClient from "../../components/trip-components/TripDashboardClient";
import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

export default async function TripDashboardPage({ params }) {
  const tripId = params.tripId;
  // SUPABASE AUTH FUNCTION
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

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return <div className="flex gap-4 items-center">Not logged in</div>;
  }



  const fetchTrip = async () => {
    const response = await fetch(`http://localhost:3000/api/trip/${tripId}`);
    if (!response.ok) {
      console.error("Response not ok, status:", response.status);
      return null; // Or handle error appropriately
    }
    return await response.json();
  };

  const tripData = await fetchTrip();

  return (
    <>
      <TripBanner trip={tripData} />
      <TripDashboardClient
        uuid={user.id}
        tripId={tripId}
      />
    </>
  );
}
