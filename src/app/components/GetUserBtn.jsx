
// import { createClient } from "@supabase/supabase-js"

// export default async function GetSession() {


//   const supabase = createClient(
//     process.env.NEXT_PUBLIC_SUPABASE_URL,
//     process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
//   )
  
//   const session = await supabase.auth.getSession()


//   function handleClick() {
//     alert(session.user.email)
//   }

//   return (
//     <>
//       <button variant="contained" color="primary" onClick={handleClick}>
//         Get User
//       </button>
//     </>
//   )
// }