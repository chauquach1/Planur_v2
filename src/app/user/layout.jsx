import ContentController from "../components/user-dashboard-components/panel-nav-components/ContentController";
import UserDashboard from "../components/user-dashboard-components/UserDashboard"
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import Loading from "./loading";
import { Suspense } from "react";
import fetchTrips from "../_utils/fetchAllTrips";
export const metadata = {
  title: "User's Page",
  description: "The fastest way to build apps with Next.js and Supabase",
};

export default async function UserLayout() {
  const cookieStore = cookies();
  const session = cookieStore.get("sb-xpkreccdqramgzjkzjui-auth-token");
  if (!session) {
    redirect("/login");
  }
  const data = JSON.parse(session.value);
  const userInfo = data.user;
  const userFullName = data.user.user_metadata;
  const userData = {
    uuid: userInfo.id,
    firstName: userFullName.firstName,
    lastName: userFullName.lastName,
    email: userInfo.email,
    phone: userInfo.phone,
  };

  const trips = await fetchTrips(userData);

  return (
    <main className="container flex flex-row h-screen min-w-full gap-1 bg-slate-400 justify-center">
      <Suspense fallback={<Loading />}>
        <div
          id="content-navigation"
          className=" flex flex-col h-full rounded-l-none rounded-xl w-full bg-gray-300"
        >
          <UserDashboard userData={userData} trips={trips}/>
        </div>
      </Suspense>
    </main>
  );
}
