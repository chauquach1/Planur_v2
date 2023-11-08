import connectMongoDB from "../../libs/mongo/mongodb";
import User from "../../models/user";
import Trip from "../../models/trip";
import { NextResponse } from "next/server";

async function getUserByUUID(uuid) {
  await connectMongoDB();
  const user = await User.findOne({ uuid });
  return user;
}


export async function GET(request) {
  try {
    // Extract UUID from request
    const { uuid } = request.query;
    if (!uuid) {
      return NextResponse.json({ error: "UUID parameter is missing" }, { status: 400 });
    }

    // Fetch user by UUID
    const user = await getUserByUUID(uuid);
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // Return the user's trips
    return NextResponse.json({ trips: user.trips }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}


export async function POST(request) {
  try {
    // Parse the JSON body from the request
    const { uuid, ...tripDetails } = await request.json();

    // Fetch user by UUID
    const user = await getUserByUUID(uuid);
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // Create and save the new trip
    const newTrip = new Trip(tripDetails);
    console.log(newTrip);
    await newTrip.save();  // Save the new trip to generate an _id

    // Associate the trip with the user's trips array
    user.trips.push(newTrip); // Push the trip _id, not the whole trip object
    await user.save(); // Save the updated user document

    // Respond with the created trip
    return NextResponse.json({ message: "Trip created.", trip: newTrip }, { status: 201 });
  } catch (error) {
    console.error("Error creating trip:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}