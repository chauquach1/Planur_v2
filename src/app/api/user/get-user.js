import connectMongoDB from '../../libs/mongo/mongodb.js';
import { NextResponse } from 'next/server';
import User from '../../models/user'; 

export default async function getTrip({uuid}) {
  try {
    await connectMongoDB();
    
    if (!uuid) {
      return res.status(400).json({ error: 'UUID parameter is missing' });
    }

    const user = await User.findOne({ uuid });


    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    if (uuid && user) {
      NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }

  } catch (error) {
    console.error('Error fetching user data:', error);
    res.status(500).json({ error: 'Server error' });
  }
}
