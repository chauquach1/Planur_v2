"use server";

export async function LogIn(prevState, formData) {
  const email = formData.get("email");
  const password = formData.get("password");
  return {
    user: {
      email,
      password,
    },
  };
}
