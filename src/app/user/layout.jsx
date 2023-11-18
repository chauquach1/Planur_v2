export const metadata = {
  title: "User's Page",
  description: "The fastest way to build apps with Next.js and Supabase",
};

export default async function UserLayout({ children }) {
  
  return (
    <main className="flex container h-screen flex-col items-center">
      {children}
    </main>
  );
}
