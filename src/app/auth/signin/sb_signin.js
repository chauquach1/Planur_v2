export async function signUpNewUser() {
  const { data, error } = await supabase.auth.signUp({
    email: 'example@email.com',
    password: 'example-password',
    options: {
      redirectTo: 'https//example.com/welcome'
    }
  })
}