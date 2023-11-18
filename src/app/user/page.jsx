import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";
import NewTripForm from "../components/form-components/NewTripForm";
import { redirect } from 'next/navigation'


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
    redirect('/login');
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
    <div className="bg-gray-300 h-full rounded-xl container text-center">
      <div
        id="new-trip-form-container"
        className="container bg-gray-600 text-white text-center p-2 bg-info"
      >
        <div className="container bg- text-center">
          <h1 className="my-0">Hello {userData.firstName}</h1>
          <h6>Where to Next?</h6>
        </div>
      </div>

      <div className="container rounded-large flex flex-col p-2 m-2 justify-center items-center">
        <NewTripForm uuid={user.id} user={userData} />
      </div>
    </div>
  );
}
