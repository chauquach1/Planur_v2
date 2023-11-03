import { createClient } from "@supabase/supabase-js";

export const dynamic = "force-dynamic";

export default async function Notes() {
  const supabase = createClient();
  const { data: notes } = await supabase.from("notes").select();

  return <pre>{JSON.stringify(notes, null, 2)}</pre>
}