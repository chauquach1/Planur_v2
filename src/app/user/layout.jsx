import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";
import NewTripForm from "../components/form-components/NewTripForm";
import { redirect } from 'next/navigation'


export const metadata = {
  title: "User's Page",
  description: "The fastest way to build apps with Next.js and Supabase",
};


export default async function UserLayout() {
  const cookieStore = cookies();
  const session = cookieStore.get('sb-xpkreccdqramgzjkzjui-auth-token')
  if (!session) {
    redirect('/login');
  }
  const data = JSON.parse(session.value);
  const userContactInfo = data.user
  const userFullName = data.user.user_metadata
  const userData = {
    firstName: userFullName.firstName,
    lastName: userFullName.lastName,
    email: userContactInfo.email,
    phone: userContactInfo.phone
  }

  return (
    <main className="container flex flex-row bg-slate-600 h-screen min-w-full justify-center">
      <div className="h-full rounded-xl container text-center">
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
          {/* <NewTripForm user={userData} /> */}
          <NewTripForm />
        </div>
      </div>
    </main>
  );
}
