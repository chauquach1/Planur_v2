import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";
import { Link } from "@nextui-org/react";
import NewTripForm from "../components/form-components/NewTripForm";
import NextTripBanner from "../components/trip-components/NextTripBanner";


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

  const {
    data: { user },
  } = await supabase.auth.getUser();


  if (!user) {
    return <div>User not found in Supabase</div>;
  }

  const fetchUserData = async (userEmail) => {
    const response = await fetch(`http://localhost:3000/api/user/${userEmail}`);
    const data = await response.json();
    if (!response.ok) {
      console.error("response not ok");
    }
    return data;
  }

  const userData = await fetchUserData(user.email);

  if (!userData) {
    console.error("!userData", error);
    return <div>Error fetching user data from MongoDB</div>;
  }

  return (
    <>
      <div
        id="new-trip-form-container"
        className="container rounded-lg bg-orange-500/10 text-white text-center p-2 my-5 bg-info"
      >
        <div className="container text-center">
          <h1 className="my-0">Hello {userData.firstName}</h1>
          <h6>Where to Next?</h6>
        </div>
      </div>

      <NextTripBanner tripid={2} />
      <Link href={`/trips`}>Trips Index</Link>
      <div className="columns-1 bg-orange-500/10 rounded-large flex flex-col w-5/6 sm:w-2/3 md:w-1/2 lg:w-2/3 xl:w-1/2 p-2 m-2 justify-center items-center">
        <NewTripForm uuid={user.id} user={userData} />
      </div>
    </>
  );
}
