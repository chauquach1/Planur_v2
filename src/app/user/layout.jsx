export const metadata = {
  title: "User's Page",
  description: "The fastest way to build apps with Next.js and Supabase",
};

export default async function UserLayout({ children }) {
  
  return (
    <main className="flex min-h-fit min-w-full flex-col items-center">
      {children}
    </main>
  );
}
