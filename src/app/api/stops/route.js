import mongoClient from "../../libs/mongo/mongodb";
import { ObjectId } from "mongodb";
import Stop from "../../models/stop"
import { NextResponse } from "next/server";

export async function POST(request) {
  const { tripId, uuid, ...stopDetails } = await request.json();
  try {
    const client = await mongoClient();
    const db = client.db("planur_v2");
    const userCollection = db.collection("users");
    const tripCollection = db.collection("trips");
    const stopsCollection = db.collection("stops");

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


    const newStop = new Stop({
      stopName: stopDetails.stopName,
      stopType: stopDetails.stopType,
      stopArrival: stopDetails.stopArrival,
      stopDeparture: stopDetails.stopDeparture,
      stopTransportation: stopDetails.stopTransportation,
      stopAddress: stopDetails.stopAddress,
      stopInterest: stopDetails.stopInterest,
      stopResNum: stopDetails.stopResNum,
      stopNotes: stopDetails.stopNotes,
      stopPhoneNumber: stopDetails.stopPhoneNumber,
      stopEmail: stopDetails.stopEmail,
    });

    await newStop.save();

    await tripCollection.updateOne(
      { _id: new ObjectId(tripId) },
      { $push: { stops: newStop._id } }
    );

    return NextResponse.json({ newStop }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
