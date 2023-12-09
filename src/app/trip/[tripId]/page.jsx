// import TripDashboardClient from "../../components/_old-components/_old-trip-components/TripDashboardClient"
// import { createServerClient } from "@supabase/ssr";
// import { cookies } from "next/headers";

// export default async function TripDashboardPage({ params }) {
//   const tripId = params.tripId;
//   // SUPABASE AUTH FUNCTION
//   const cookieStore = cookies();
//   const supabase = createServerClient(
//     process.env.NEXT_PUBLIC_SUPABASE_URL,
//     process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
//     {
//       cookies: {
//         get(name) {
//           return cookieStore.get(name)?.value;
//         },
//       },
//     }
//   );

//   const {
//     data: { user },
//   } = await supabase.auth.getUser();

//   if (!user) {
//     return <div className="flex gap-4 items-center">Not logged in</div>;
//   }

//   const fetchTrip = async () => {
//     const response = await fetch(`https://planur-v2.vercel.app/api/trip/${tripId}`);
//     if (!response.ok) {
//     //  console.error ("Response not ok, status:", response.status);
//       return null; // Or handle error appropriately
//     }
//     return await response.json();
//   };

//   const tripData = await fetchTrip();

//   return (
//     <div className="w-full flex flex-col items-center justify-center">
//       <TripDashboardClient uuid={user.id} tripId={tripId} trip={tripData} />
//     </div>
//   );
// }
