import {mongoClient} from "../../libs/mongo/mongodb";
import { ObjectId } from "mongodb";
import Trip from "../../models/trip";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { user, ...tripDetails } = await request.json();
  console.log('request', user, tripDetails);
  const client = await mongoClient();

  try {
    const db = client.db("planur_v2");
    // console.log('db', db);
    const userCollection = db.collection("users");
    // console.log('userCollection', userCollection);

    const mongoUser = await userCollection.findOne({
      $or: [
        { _id: new ObjectId(user._id) },
        { uuid: user.uuid },
        { email: user.email }
      ]
    });
    // console.log('user from trip route', mongoUser);


    if (!mongoUser) {
      // console.log('user not found');
      return NextResponse.json({ error: "User not found" }, { status: 401 });
    }

    // Create a new trip
    const newTrip = new Trip({
      tripName: tripDetails.tripName,
      tripDestination: tripDetails.destination,
      tripStartDate: tripDetails.startDate,
      tripEndDate: tripDetails.endDate,
      tripGuests: tripDetails.guests,
      tripAccommodation: tripDetails.accommodation,
      tripReason: tripDetails.reason,
      tripTransportation: tripDetails.transportation,
    });

    await newTrip.save();
    userCollection.updateOne(
      { _id: new ObjectId(user._id)},
      { $push: { trips: newTrip._id } }
    );

    return NextResponse.json(newTrip, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}