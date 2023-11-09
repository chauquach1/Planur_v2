import connectMongoDB from "../../../libs/mongo/mongodb";
import Trip from "../../../models/trip";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    await connectMongoDB();

    const url = new URL(request.url);
    const tripId = url.pathname.split('/').pop(); // Assuming URL is like /api/trip/{tripId}

    if (!tripId) {
      return NextResponse.json({ error: "Trip ID parameter is missing" }, { status: 400 });
    }

    // Fetching the trip by ID
    const foundTrip = await Trip.findById(tripId);
    // console.log(foundTrip);

    if (!foundTrip) {
      return NextResponse.json({ error: "Trip not found" }, { status: 404 });
    }

    // Return the trip
    return NextResponse.json(foundTrip, { status: 200 });

  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}