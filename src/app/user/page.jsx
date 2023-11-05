import { createClient } from "@supabase/supabase-js";

export default async function Page() {

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  );

  const {data, error} = await supabase.auth.getUser();

  if (!data) {
    return (
      <div className="container bg-zinc-500">
        <h1>no user</h1>
      </div>
    );
  } else {
    console.log(data.user);
    return (
      <div className="container bg-zinc-500">
        <h1>{data.email}'s page</h1>
      </div>
    );
  }
}
