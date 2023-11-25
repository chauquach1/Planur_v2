import { mongoClient } from "../../../libs/mongo/mongodb";
import { ObjectId } from "mongodb";
import Trip from "../../../models/trip";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
  const tripId = params.id;
  const { uuid, ...tripDetails } = await request.json();

  try {
    const client = await mongoClient();
    const db = client.db("planur_v2");
    const userCollection = db.collection("users");
    const tripCollection = db.collection("trips");

    if (!tripId) {
      return NextResponse.json(
        { error: "Trip ID parameter is missing" },
        { status: 400 }
      );
    }
    const user = await userCollection.findOne({ uuid: uuid });
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 401 });
    }

    const trip = await tripCollection.findOne({ _id: new ObjectId(tripId) });
    if (!trip) {
      return NextResponse.json({ error: "Trip not found" }, { status: 402 });
    }

    // update trip
    const tripToUpdate = await Trip.findByIdAndUpdate(
      { _id: new ObjectId(tripId) },
      {
        tripStartDate: tripDetails.startDate,
        tripEndDate: tripDetails.endDate,
        tripName: tripDetails.tripName,
        tripDestination: tripDetails.destination,
        tripGuests: tripDetails.guests,
        tripReason: tripDetails.reason,
        tripTransportation: tripDetails.transportation,
      },
      { new: true } // This option returns the updated document
    );

    if (!tripToUpdate) {
      return NextResponse.json(
        { error: "Stop not found or update failed" },
        { status: 404 }
      );
    }

    return NextResponse.json(tripToUpdate, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

export async function DELETE(request, { params }) {
  const tripId = params.id;

  try {
    const client = await mongoClient();
    const db = client.db("planur_v2");
    const tripCollection = db.collection("trips");

    const trip = await tripCollection.findOne({ _id: new ObjectId(tripId) });
    if (!trip) {
      console.log("Trip not found");
      return NextResponse.json({ error: "Trip not found" }, { status: 403 });
    }

    await tripCollection.deleteOne({ _id: new ObjectId(tripId) });
    return NextResponse.json({ message: "Trip deleted" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

export async function GET(request, { params }) {
  const tripId = params.id;
  const client = await mongoClient();

  try {
    const db = client.db("planur_v2");
    const tripCollection = db.collection("trips");

    const trip = await tripCollection.findOne({ _id: new ObjectId(tripId) });
    if (!trip) {
      return NextResponse.json({ error: "Trip not found" }, { status: 404 });
    }

    return NextResponse.json(trip, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
