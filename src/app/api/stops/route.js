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

    if (!tripId) {
      return NextResponse.json({ error: "Trip ID parameter is missing" }, { status: 400 });
    }
    const user = await userCollection.findOne({ uuid: uuid });
    const trip = await tripCollection.findOne({ _id: new ObjectId(tripId) });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 401 });
    }

    if (!trip) {
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
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

export async function PUT(request) {
  const { uuid, tripId, ...updatedStop } = await request.json();
  try {
    const client = await mongoClient();
    const db = client.db("planur_v2");
    const userCollection = db.collection("users");
    const tripCollection = db.collection("trips");

    if (!tripId) {
      return NextResponse.json(
        { error: "Trip ID parameter is missing" },
        { status: 400 }
      );
    }
    const user = await userCollection.findOne({ uuid: uuid });
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 401 });
    }
    
    const trip = await tripCollection.findOne({ _id: new ObjectId(tripId) });
    if (!trip) {
      return NextResponse.json({ error: "Trip not found" }, { status: 402 });
    }

    // Create a new stop
    const stopToUpdate = await Stop.findByIdAndUpdate(
      { _id: new ObjectId(updatedStop.stopId) },
      {
        stopAddress: updatedStop.stopAddress,
        stopArrival: updatedStop.stopArrival,
        stopDeparture: updatedStop.stopDeparture,
        stopEmail: updatedStop.stopEmail,
        stopInterest: updatedStop.stopInterest,
        stopName: updatedStop.stopName,
        stopNotes: updatedStop.stopNotes,
        stopPhoneNumber: updatedStop.stopPhoneNumber,
        stopResNum: updatedStop.stopResNum,
        stopTransportation: updatedStop.stopTransportation,
        stopType: updatedStop.stopType,

      },
      { new: true } // This option returns the updated document
    );

    if (!stopToUpdate) {
      return NextResponse.json(
        { error: "Stop not found or update failed" },
        { status: 404 }
      );
    }

    return NextResponse.json(stopToUpdate, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

export async function GET(request) {
  const client = await mongoClient();

  try {
    const tripId = request.nextUrl.searchParams.get('tripId')
    
    if (!tripId) {
      return NextResponse.json({ error: "TripId parameter is missing" }, { status: 400 });
    }

    const db = client.db("planur_v2");
    const tripsCollection = db.collection("trips");
    const stopsCollection = db.collection("stops");

    const trip = await tripsCollection.findOne({ _id: new ObjectId(tripId)})
    if (!trip || !trip.stops) {
      return NextResponse.json({ error: "Stops not found" }, { status: 401 });
    }
    const stops = await stopsCollection.find({ _id: { $in: trip.stops.map(id => new ObjectId(id)) }}).toArray();

    return NextResponse.json( stops , { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}