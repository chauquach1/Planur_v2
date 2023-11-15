import { useRouter } from 'next/navigation';
import mongoClient from "../libs/mongo/mongodb";
import { createBrowserClient } from "@supabase/ssr";
import { Link } from "@nextui-org/react";
import NewTripForm from "../components/user-components/NewTripForm";
import NextTripBanner from "../components/trip-components/NextTripBanner"
import { SupabaseProvider } from "../context/SupabaseProvider";



export default async function UserPage() {
 
  
  return (
    <>
      {/* {mongoUserData && user ? (
        <>
          <div
            id="new-trip-form-container"
            className="container rounded-lg bg-orange-500/10 text-white text-center p-2 my-5 bg-info"
          >
            <div className="container text-center">
              <h1 className="my-0">Hello {user.email}</h1>
              <h6>Where to Next?</h6>
            </div>
          </div>

          <NextTripBanner  tripid={2}/>
          <Link href={`/trips`}>Trips Index</Link>
          <div className="columns-1 bg-orange-500/10 rounded-large flex flex-col w-5/6 sm:w-2/3 md:w-1/2 lg:w-2/3 xl:w-1/2 p-2 m-2 justify-center items-center">
            <NewTripForm uuid={user.id}/>
          </div>
        </>
      ) : (
        <div>User not found in MongoDB</div>
        )} */}
        <div>User not logged in</div>
    </>
  );
}
