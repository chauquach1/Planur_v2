import connectMongoDB from "../../libs/mongo/mongodb";
// import User from "../../models/user";
// import Trip from "../../models/trip";
import Accommodation from "../../models/accommodation";
import { NextResponse } from "next/server";
// import {cookies} from "next/headers"
// import { createServerClient } from "@supabase/ssr";

// async function getUserByUUID(uuid) {
//   await connectMongoDB();
//   const user = await User.findOne({ uuid });
//   return user;
// }

// const getAccommodation = async () => {
//   const accomId = '654ef7b9c169417803640764'
//   await connectMongoDB();
//   const accommodation = await Accommodation.findById(accomId).lean().exec();
//   console.log('accommodation:',accommodation);
//   return accommodation;
// };

export async function getAllAccommodations() {
  await connectMongoDB();
  const accommodations = await Accommodation.find({}).lean().exec();
  return accommodations;
}

// export async function POST(request) {
//   try {
//     console.log('request from accom form',request);
//     const { uuid, tripId, ...accomDetails } = await request.json();

//     // Fetch user by UUID
//     const user = await getUserByUUID(uuid);
//     if (!user) {
//       return NextResponse.json({ error: "User not found" }, { status: 404 });
//     }

//     // Create and save the new trip
//     const newAccommodation = new Accommodation(accomDetails);
//     console.log(newAccommodation);
//     await newAccommodation.save();  // Save the new trip to generate an _id

//     // Find the specific trip by tripId and add the accommodation
//     const trip = await Trip.findById(tripId);
    
//     // console.log('trip from mongo route', trip);
//     if (!trip) {
//       return NextResponse.json({ error: "Trip not found" }, { status: 404 });
//     }

//     trip.accommodations.push(newAccommodation._id);
//     await trip.save();

//     // Respond with the created accommodation
//     return NextResponse.json({ message: "Accommodation created.", accommodation: newAccommodation }, { status: 201 });
//   } catch (error) {
//     console.error("Error creating accommodation:", error);
//     return NextResponse.json({ error: "Server error" }, { status: 500 });
//   }
// }