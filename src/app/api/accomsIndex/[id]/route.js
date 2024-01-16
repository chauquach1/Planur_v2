import {mongoClient} from "../../../libs/mongo/mongodb";
import { NextResponse } from "next/server";
import { ObjectId } from "mongodb";

export async function GET(request, {params}) {
  console.log('fetchAllAccoms GET request');
  const client = await mongoClient();
  try {
    const db = client.db('planur_v2');
    const { id } = await params;

    // Extract UUID from request
    if (!id) {
      return NextResponse.json({ error: "id as email parameter is missing" }, { status: 400 });
    }

    // Fetch trip by ObjectId
    const trip = await db.collection('trips').findOne({ _id: new ObjectId(id) })
    if (!trip) {
      return NextResponse.json({ error: "Trip not found" }, { status: 404 });
    }

    // Fetch accommodations by ObjectId
    const accomIds = trip.accommodations;
    const accommodations = await db
      .collection("accommodations")
      .find({ _id: { $in: accomIds } })
      .sort({ accomCheckIn: 1 }) // Sort by accomCheckIn in ascending order
      .toArray();
    return NextResponse.json(accommodations, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}