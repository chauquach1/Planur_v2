import mongoClient from "../../libs/mongo/mongodb";
import { ObjectId } from "mongodb";
import Trip from "../../models/trip";
import { NextResponse } from "next/server";

export async function POST(request) {
  console.log('POST request received');
  const { user: userInfo, ...tripDetails } = await request.json();

  try {
    const client = await mongoClient();
    const db = client.db("planur_v2");
    const userCollection = db.collection("users");

    if (!userInfo) {
      console.log("NO userInfo");
      return NextResponse.json({ error: "No userEmail Imported", status: 400 });
    }

    const user = await userCollection.findOne({
      $or: [
        { _id: new ObjectId(userInfo._id) },
        { uuid: userInfo.uuid },
        { email: userInfo.email }
      ]
    });

    if (!user) {
      console.log("NO USER", user);
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
    await userCollection.updateOne(
      { _id: new ObjectId(user._id)},
      { $push: { trips: newTrip._id } }
    );

    return NextResponse.json(newTrip, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}