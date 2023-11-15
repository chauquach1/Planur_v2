import mongoClient from "../../libs/mongo/mongodb";
import { ObjectId } from "mongodb";
import Trip from "../../models/trip";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { uuid, ...tripDetails } = await request.json();

  try {
    const client = await mongoClient();
    const db = client.db("planur_v2");
    const userCollection = db.collection("users");

    if (!uuid) {
      console.log("NO UUID", uuid);
      return { error: "No UUID Imported", status: 400 };
    }

    const user = await userCollection.findOne({ uuid: uuid });

    if (!user) {
      console.log('NO USER', user);
      return NextResponse.json({ error: "User not found" }, { status: 401 });
    }

    // Create a new trip
    const newTrip = new Trip ({
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
      { uuid: uuid },
      { $push: { trips: newTrip._id } }
    );


    return NextResponse.json({ newTrip }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}


export async function GET(request) {
  const { tripId } = await request.json();
  console.log(tripId);
  try {
    const client = await mongoClient();
    const db = client.db("planur_v2");
    const userCollection = db.collection("users");

    if (!uuid) {
      console.log("NO UUID", uuid);
      return { error: "No UUID Imported", status: 400 };
    }

    const user = await userCollection.findOne({ uuid: uuid });

    if (!user) {
      console.log('NO USER', user);
      return NextResponse.json({ error: "User not found" }, { status: 401 });
    }

    // Create a new trip
    const newTrip = new Trip ({
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
      { uuid: uuid },
      { $push: { trips: newTrip._id } }
    );


    return NextResponse.json({ newTrip }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
