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


export async function GET(req, res) {
  // Using query parameters for GET request
  const { tripId, uuid } = req.query;

  try {
    const client = await mongoClient();
    const db = client.db("planur_v2");
    const userCollection = db.collection("users");
    const tripCollection = db.collection("trips");

    if (!uuid) {
      console.log("NO UUID", uuid);
      return res.status(400).json({ error: "No UUID provided" });
    }

    const user = await userCollection.findOne({ uuid: uuid });
    if (!user) {
      console.log('NO USER', user);
      return res.status(401).json({ error: "User not found" });
    }

    if (!tripId) {
      console.log("NO TRIP ID", tripId);
      return res.status(400).json({ error: "No tripId provided" });
    }

    const trip = await tripCollection.findOne({ _id: new ObjectId(tripId) });
    if (!trip) {
      console.log('TRIP NOT FOUND', trip);
      return res.status(404).json({ error: "Trip not found" });
    }

    res.status(200).json(trip);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
}