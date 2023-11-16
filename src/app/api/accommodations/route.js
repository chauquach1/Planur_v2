import mongoClient from "../../libs/mongo/mongodb";
import { ObjectId } from "mongodb";
import Accommodation from "../../models/accommodation";
import { NextResponse } from "next/server";

export async function POST(request) {
  const {tripId, uuid, ...accomDetails} = await request.json();
  try {
    const client = await mongoClient();
    const db = client.db("planur_v2");
    const userCollection = db.collection("users");
    const tripCollection = db.collection("trips");
    
  
    if (!tripId) {
      console.log('NO TRIP ID', tripId);
      return NextResponse.json({ error: "Trip ID parameter is missing" }, { status: 400 });
    }
    const user = await userCollection.findOne({ uuid: uuid });
    const trip = await tripCollection.findOne({ _id: new ObjectId(tripId) });

    if (!user) {
      console.log('NO USER', user);
      return NextResponse.json({ error: "User not found" }, { status: 401 });
    }

    if (!trip) {
      console.log('NO TRIP', trip);
      return NextResponse.json({ error: "Trip not found" }, { status: 402 });
    }



    // Create a new accommodation
    const newAccommodation = new Accommodation({ 
      accomName: accomDetails.accomName,
      accomType: accomDetails.accomType,
      accomCheckIn: accomDetails.accomCheckIn,
      accomCheckOut: accomDetails.accomCheckOut,
      accomAddress: accomDetails.accomAddress,
      accomPhoneNumber: accomDetails.accomPhoneNumber,
      accomEmail: accomDetails.accomEmail,
      accomResNum: accomDetails.accomResNum,
    });
    await newAccommodation.save();

    await tripCollection.updateOne(
      { _id: new ObjectId(tripId) },
      { $push: { accommodations: newAccommodation._id } }
    );
    
    // // Return the accommodation
    return NextResponse.json({ newAccommodation }, { status: 200 });

  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }

}

export async function GET(request) {
  const client = await mongoClient();

  try {
    const tripId = request.nextUrl.searchParams.get('tripId')
    
    if (!tripId) {
      console.log('NO TRIP ID', tripId);
      return NextResponse.json({ error: "TripId parameter is missing" }, { status: 400 });
    }

    const db = client.db("planur_v2");
    const tripsCollection = db.collection("trips");
    const accommodationsCollection = db.collection("accommodations");

    const trip = await tripsCollection.findOne({ _id: new ObjectId(tripId)})
    if (!trip || !trip.accommodations) {
      return NextResponse.json({ error: "Accommodations not found" }, { status: 401 });
    }
    const accommodations = await accommodationsCollection.find({ _id: { $in: trip.accommodations.map(id => new ObjectId(id)) }}).toArray();

    return NextResponse.json( accommodations , { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
