// import { createServerClient } from "@supabase/ssr";
// import { cookies } from "next/headers";
// import TripIndexCard from "../components/_old-components/_old-trip-components/TripCard"

// const fetchTrips = async (userEmail) => {
//   if (!userEmail) {
//     // console.error("no userEmail");
//     return <div>no userEmail</div>;
//   }
//   const response = await fetch(
//     `https://planur-v2.vercel.app/api/tripsindex/${userEmail}`
//   );

//   if (!response.ok) {
//     // console.error("response not ok");
//   }
//   const data = await response.json();
//   return data;
// };

// export default async function TripsIndex() {
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

//   // Use Supabase to get the current user
//   const {
//     data: { user },
//   } = await supabase.auth.getUser();

//   if (!user) {
//     return <div className="flex gap-4 items-center">Not logged in</div>;
//   }

//   const tripsArray = await fetchTrips(user.email);

//   return (
//     <div className="container flex flex-col justify-center items-center h-full bg-slate-600 pt-6 gap-4">
//       <h1 className="text-white text-6xl">Trips Index</h1>
//       <div className="container flex flex-row justify-center flex-wrap gap-2 p-6 h-[1000px] shadow-xl">
//         {tripsArray.length > 0 ? (
//           <>
//             {tripsArray.map((trip) => (
//               <TripIndexCard
//                 tripId={trip._id}
//                 tripName={trip.tripName}
//                 tripStartDate={trip.tripStartDate}
//                 tripEndDate={trip.tripEndDate}
//                 key={trip._id}
//               />
//             ))}
//           </>
//         ) : (
//           <>
//             <h1>
//               <a href="/user">
//                 Looks like you need a vacation. Time to Plan One!
//               </a>
//             </h1>
//           </>
//         )}
//       </div>
//     </div>
//   );
// }
