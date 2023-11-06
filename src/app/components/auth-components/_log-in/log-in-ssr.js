import { createServerClient } from "@supabase/supabase-js";
import { cookies } from "next-cookies";
import { redirect } from "next/navigation";

const logIn = async (formData) => {
  const email = formData.get("email");
  const password = formData.get("password");
  const cookieStore = cookies();
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    {
      cookies: {
        get(name) {
          return cookieStore.get(name)?.value;
        },
      },
    }
  );

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  supabase.auth.onAuthStateChange((event, session) => {
    console.log(event, session);
    if (event === 'SIGNED_IN') {
      console.log('SIGNED_IN');
    }
    if (event === 'SIGNED_OUT') {
      console.log('SIGNED_OUT');
    }
  });
  

  if (error) {
    console.log(error);
    return redirect("/login?message=Could not authenticate user");
  } else {
    console.log(data);
    return redirect("/user");
  }
};