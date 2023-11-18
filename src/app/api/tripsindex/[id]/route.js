import mongoClient from "../../../libs/mongo/mongodb";
import { NextResponse } from "next/server";

export async function GET(request, {params}) {
  const client = await mongoClient();
  try {
    const db = client.db('planur_v2');
    const { id } = await params;

    // Extract UUID from request
    if (!id) {
      return NextResponse.json({ error: "id as email parameter is missing" }, { status: 400 });
    }

    // Fetch user by UUID
    const user = await db.collection('users').findOne({email:id})
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // Fetch trips
    const tripIds = user.trips;
    const tripsArray = await db
      .collection("trips")
      .find({ _id: { $in: tripIds } })
      .sort({ tripStartDate: 1 }) // Sort by tripStartDate in ascending order
      .toArray();
    
    return NextResponse.json(tripsArray, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}