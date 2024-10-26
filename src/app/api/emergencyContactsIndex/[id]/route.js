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

    // Fetch trip by ObjectId
    const trip = await db.collection('trips').findOne({ _id: new ObjectId(id) })

    if (!trip) {
      return NextResponse.json({ error: "Trip not found" }, { status: 404 });
    }

    // Fetch emergencyContacts by ObjectId
    const contactIds = trip.emergencyContacts;

    if (!contactIds) {
      return NextResponse.json([], { status: 200 });
    }

    const emergencyContacts = await db
      .collection("emergencycontacts")
      .find({ _id: { $in: contactIds } })
      .sort({ accomCheckIn: 1 }) // Sort by accomCheckIn in ascending order
      .toArray();

    if (!emergencyContacts) {
      return NextResponse.json([], { status: 404 });
    }
    return NextResponse.json(emergencyContacts, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}