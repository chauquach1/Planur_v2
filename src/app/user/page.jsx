import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';
import connectMongoDB from '../libs/mongo/mongodb.js';
import User from '../models/user.js';

// This should be a utility function, not an API route handler
async function getMongoData(uuid) {
  await connectMongoDB();
  // Fetch the user from the MongoDB database using the UUID
  const user = await User.findOne({ uuid });
  return user; // Return the user data directly
}

export default async function UserPage() {
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

  // Use Supabase to get the current user
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    return (
      <div className="flex gap-4 items-center">
        Not logged in
      </div>
    );
  }

  const mongoData = await getMongoData(user.id);

  return (
    <div className="flex gap-4 items-center">
      {user.email} {user.id}
      {/* Display MongoDB data here */}
      {mongoData ? (
        <div>
          {mongoData.id}
        </div>
      ) : (
        <div>User not found in MongoDB</div>
      )}
    </div>
  );
}
