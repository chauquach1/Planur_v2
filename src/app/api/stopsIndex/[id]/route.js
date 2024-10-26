import {mongoClient} from "../../../../lib/mongo/mongodb";
import { NextResponse } from "next/server";
import { ObjectId } from "mongodb";

export async function GET(request, {params}) {
  const client = await mongoClient();
  try {
    const db = client.db('planur_v2');
    const { id } = await params;

    // Extract UUID from request
    if (!id) {
      return NextResponse.json({ error: "id as email parameter is missing" }, { status: 400 });
    }

    // Fetch stop by ObjectId
    const trip = await db.collection('trips').findOne({ _id: new ObjectId(id) })
    if (!trip) {
      return NextResponse.json({ error: "Trip not found" }, { status: 404 });
    }

    // Fetch stops by ObjectId
    const stopIds = trip.stops;
    const stops = await db
      .collection("stops")
      .find({ _id: { $in: stopIds } })
      .sort({ stopArrival: 1 }) // Sort by stopArrival in ascending order
      .toArray();
    return NextResponse.json(stops, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}