import {mongoClient} from "../../libs/mongo/mongodb";
import { NextResponse } from "next/server";


export async function getAllTrips(uuid) {
  try {
    const client = await mongoClient();
    const db = client.db('planur_v2');
    


    // Extract UUID from request
    if (!uuid) {
      return NextResponse.json({ error: "UUID parameter is missing" }, { status: 400 });
    }

    // Fetch user by UUID
    const user = await db.collection('users').findOne({uuid:uuid})
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // Fetch trips
    const tripIds = user.trips;
    const allTrips = await db.collection('trips').find({_id:{$in:tripIds}}).toArray();
    
    return NextResponse.json({ trips: allTrips }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}