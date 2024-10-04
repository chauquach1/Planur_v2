import {mongoClient} from "../../libs/mongo/mongodb";
import { ObjectId } from "mongodb";
import Trip from "../../models/trip";
import { NextResponse } from "next/server";

export async function POST(request) {
  console.log('POST TRIP request HIT');
  const userId = request.nextUrl.searchParams.get('userId')
  const tripDetails  = await request.json();
  console.log(`POST TRIP userId:${userId}`);  
  console.log('POST tripDetails', tripDetails);
  const client = await mongoClient();

  try {
    const db = client.db("planur_v2");
    // console.log('db', db);
    const userCollection = db.collection("users");
    // console.log('userCollection', userCollection);

    const mongoUser = await userCollection.findOne({uuid: userId});

    if (!mongoUser) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }
    // Create a new trip
    const newTrip = new Trip({
      tripName: tripDetails.tripName,
      tripDestination: tripDetails.tripDestination,
      tripStartDate: tripDetails.tripStartDate,
      tripEndDate: tripDetails.tripEndDate,
      tripReason: tripDetails.tripReason,
    });

    if (!newTrip) {
      return NextResponse.json({ error: "Failed to create trip" }, { status: 500 });
    }

    await newTrip.save();
    userCollection.updateOne(
      { uuid: userId},
      { $push: { trips: newTrip._id } }
    );

    return NextResponse.json(newTrip, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}