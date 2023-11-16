import mongoClient from "../../../libs/mongo/mongodb";
import { ObjectId } from "mongodb";
import Trip from "../../../models/trip";
import { NextResponse } from "next/server";

export async function GET(request, { params } ) {
  const tripId = params.id;
  const client = await mongoClient();

  try {
    const db = client.db("planur_v2");
    const tripCollection = db.collection("trips");

    const trip = await tripCollection.findOne({ _id: new ObjectId(tripId) });
    if (!trip) {
      console.log('TRIP NOT FOUND', trip);
      return NextResponse.json({ error: "Trip not found" }, { status: 404 });
    }

    return NextResponse.json(trip , { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}