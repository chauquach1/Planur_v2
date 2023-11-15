import { createBrowserClient } from "@supabase/supabase-js";

const signUp = async (formData) => {

  // const origin = headers().get("origin");
  const email = formData.get("email");
  const password = formData.get("password");
  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  )

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: `${origin}/auth/callback`,
    },
  });

  if (data) {
    console.log(data);
  }

  if (error) {
    return redirect("/login?message=Could not authenticate user");
  }

  return redirect("/login?message=Check email to continue sign in process");
};
