import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";
import NewTripForm from "../components/form-components/NewTripForm";
import { redirect } from 'next/navigation'


const fetchUserData = async (userEmail) => {
  const response = await fetch(`http://localhost:3000/api/user/${userEmail}`);
  const data = await response.json();
  if (!response.ok) {
    console.error("fetchUserData error", data);
    redirect('/login')
  }
  else {
    return data;
  }
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

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect('/login');
  }

  const userData = await fetchUserData(user.email);

  if (!userData) {
    console.error("!userData", error);
    redirect('/login')
  }

  return (

    <div className="bg-slate-600 h-full rounded-xl container text-center">
      <div
        id="new-trip-form-container"
        className="container text-white text-center p-2 bg-info"
      >
        <div className="container bg- text-center">
          <h1 className="my-0">Hello {userData.firstName}</h1>
          <h6>Where to Next?</h6>
        </div>
      </div>

      <div className="container rounded-large flex flex-col p-2 m-2 justify-center items-center">
        <NewTripForm user={userData} />
      </div>
    </div>
  );
}
