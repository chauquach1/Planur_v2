import UserDashboard from "../components/user-dashboard-components/UserDashboard";
import { cookies } from "next/headers";
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
    <main className="container flex flex-row h-screen min-w-full justify-center">
      <UserDashboard userData={userData} />
    </main>
  );
}
