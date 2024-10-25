import {mongoClient} from "../../../lib/mongo/mongodb";
import { NextResponse } from "next/server";
import { ObjectId } from "mongodb";

export async function GET(request, {params}) {
  const client = await mongoClient();
  try {
    const db = client.db('planur_v2');
    // console.log("@accomsIndex/id route Connected to database");
    // console.log();
    const { id } = await params;

    // Extract UUID from request
    if (!id) {
      // console.log("id as email parameter is missing");
      return NextResponse.json({ error: "id as email parameter is missing" }, { status: 400 });
    }

    // Fetch trip by ObjectId
    const trip = await db.collection('trips').findOne({ _id: new ObjectId(id) })
    // console.log("@accomsIndex/id route Trip: ", trip);
    if (!trip) {
      // console.log("Trip not found");
      return NextResponse.json({ error: "Trip not found" }, { status: 404 });
    }

    // Fetch accommodations by ObjectId
    // console.log("@accomsIndex/id route Fetching accommodations");
    const accomIds = trip.accommodations;
    // console.log("@accomsIndex/id route Accommodation IDs: ", accomIds);

    // console.log("@accomsIndex/id route Fetching accommodations");
    const accommodations = await db
      .collection("accommodations")
      .find({ _id: { $in: accomIds } })
      .sort({ accomCheckIn: 1 }) // Sort by accomCheckIn in ascending order
      .toArray();
      if (!accommodations) {
        // console.log("@accomsIndex/id route Accommodations not found");
        return NextResponse.json({ error: "Accommodations not found" }, { status: 404 });
      }
      // console.log("@accomsIndex/id route Accommodations found: ", accommodations);
    
    return NextResponse.json(accommodations, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}