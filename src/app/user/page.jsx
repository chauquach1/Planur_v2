import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";
import connectMongoDB from "../libs/mongo/mongodb.js";
import User from "../models/user.js";
import NewTripForm from "../components/user-components/NewTripForm.jsx";
import NextTripBanner from "../components/trip-components/next-trip.jsx";

// This should be a utility function, not an API route handler
async function getMongoData(uuid) {
  await connectMongoDB();
  // Fetch the user from the MongoDB database using the UUID
  const user = await User.findOne({ uuid });
  return user; // Return the user data directly
}

export default async function UserPage() {
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

  const mongoData = await getMongoData(user.id);
  console.log("user id:", user.id);
  console.log(typeof user.id);

  return (
    <>
      {/* {console.log('console on server mongoData: ', mongoData)}    
    {console.log('console on server supabase user email: ', user.email)}     */}
      {mongoData ? (
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

          <NextTripBanner />
          <div className="columns-1 bg-orange-500/10 rounded-large flex flex-col w-5/6 sm:w-2/3 md:w-1/2 lg:w-2/3 xl:w-1/2 p-2 m-2 justify-center items-center">
            <NewTripForm uuid={user.id} />
          </div>
        </>
      ) : (
        <div>User not found in MongoDB</div>
      )}
    </>
  );
}
