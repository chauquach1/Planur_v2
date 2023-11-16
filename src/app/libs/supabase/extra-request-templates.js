// // PASSWORD RESET REQUEST TEMPLATE
//   // link: https://supabase.com/docs/reference/javascript/auth-resetpasswordforemail?example=reset-password-react
// /**
//  * Step 1: Send the user an email to get a password reset token.
//  * This email contains a link which sends the user back to your application.
//  */
// const { data, error } = await supabase.auth
//   .resetPasswordForEmail('user@email.com')

// /**
//  * Step 2: Once the user is redirected back to your application,
//  * ask the user to reset their password.
//  */
//  useEffect(() => {
//    supabase.auth.onAuthStateChange(async (event, session) => {
//      if (event == "PASSWORD_RECOVERY") {
//        const newPassword = prompt(
//          "What would you like your new password to be?"
//        );
//        const { data, error } = await supabase.auth.updateUser({
//          password: newPassword,
//        });

//        if (data) alert("Password updated successfully!");
//        if (error) alert("There was an error updating your password.");
//      }
//    });
//  }, []);



// // GET SESSION TEMPLATE
//   // link: https://supabase.com/docs/reference/javascript/auth-getsession
// const { data, error } = await supabase.auth.getSession()


// // RETRIEVE (REFRESH) NEW SESSION TEMPLATE
//   // link: https://supabase.com/docs/reference/javascript/auth-refreshsession
//   // refreshes session using current session
//     const { data, error } = await supabase.auth.refreshSession()
//     const { session, user } = data

//   // refreshes session using refresh token
//     const { data, error } = await supabase.auth.refreshSession({ refresh_token })
//     const { session, user } = data;


// // GET USER TEMPLATE
//   // link: https://supabase.com/docs/reference/javascript/auth-getuser
//   // Get the logged in user with the current existing session
//     const { data, error } = await supabase.auth.getUser()
//   // Get the logged in user with a custom access token jwt
//     const { data: { user } } = await supabase.auth.getUser(jwt)


// // UPDATE USER TEMPLATE
//   // link: https://supabase.com/docs/reference/javascript/auth-updateuser
//   // Update the email for an authenticated user
//     const { data, error } = await supabase.auth.updateUser({email: 'new@email.com'})
//   // Update the password for an authenticated user
//     const { data, error } = await supabase.auth.updateUser({password: 'new password'})
//   // Update the user's metadata
//     const { data, error } = await supabase.auth.updateUser({
//       data: { hello: 'world' }
//     })
//   // Update the user's password with a nonce
//     const { data, error } = await supabase.auth.updateUser({
//       password: 'new password',
//       nonce: '123456'
//     })

// // SEND A PASS RE-AUTHENTICATION NONCE TEMPLATE
//   // link: https://supabase.com/docs/reference/javascript/auth-reauthentication
//   const { data, error } = await supabase.auth.reauthenticate()

// // RESEND OTP TEMPLATE
//   // link: https://supabase.com/docs/reference/javascript/auth-resend


// // SET/REFRESH SESSION TEMPLATE
//   // link: https://supabase.com/docs/reference/javascript/auth-setsession?example=refresh-the-session
//   const { data, error } = supabase.auth.setSession({
//     access_token,
//     refresh_token
//   })

// // EXCHANGE AUTH CODE FOR SESSION TEMPLATE
//   // link: https://supabase.com/docs/reference/javascript/auth-exchangecodeforsession
//   supabase.auth.exchangeCodeForSession('34e770dd-9ff9-416c-87fa-43b31d7ef225')

