export const metadata = {
  title: "User's Page",
  description: "The fastest way to build apps with Next.js and Supabase",
};

export default async function Layout({ children }) {
  return (
    <main className="flex min-h-fit min-w-full flex-col items-center">
      <div className=" flex-1 flex flex-col w-full p-8 justify-start items-center">
        User Page
      </div>
        {children}
    </main>
  );
}
