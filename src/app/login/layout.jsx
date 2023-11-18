
export const metadata = {
  title: "Login/SignUp Page",
  description: "The fastest way to build apps with Next.js and Supabase",
};

export default async function Layout({ children }) {
  return (
    <main className="flex min-h-fit min-w-full flex-col items-center">
      <div className=" flex-1 flex flex-col w-full justify-start items-center">
        {children}
      </div>
    </main>
  );
}
