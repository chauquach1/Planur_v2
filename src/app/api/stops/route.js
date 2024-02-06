import {mongoClient} from "../../libs/mongo/mongodb";
import { ObjectId } from "mongodb";
import Stop from "../../models/stop"
import { NextResponse } from "next/server";

export async function stopsFetch(request){
  const rawFormData = await request.json();
  console.log('STOPS FETCH stop', rawFormData);
}

export async function POST(request) {
  console.log('POST STOP ROUTE HIT');
  const tripId = request.nextUrl.searchParams.get('tripId')
  const rawFormData = await request.json();
  console.log('rawFormData', rawFormData);

  try {
    const client = await mongoClient();
    const db = client.db("planur_v2");
    const tripCollection = db.collection("trips");

    if (!tripId) {
      return NextResponse.json({ error: "Trip ID parameter is missing" }, { status: 400 });
    }
    const trip = await tripCollection.findOne({ _id: new ObjectId(tripId) });

    if (!trip) {
      return NextResponse.json({ error: "Trip not found" }, { status: 402 });
    }


    const newStop = new Stop({
      stopName: rawFormData.stopName,
      stopType: rawFormData.stopType,
      stopArrival: rawFormData.stopArrival,
      stopDeparture: rawFormData.stopDeparture,
      stopTransportation: rawFormData.stopTransportation,
      // Only include stopAddress if it's not undefined
        ...(rawFormData.stopAddress && {
        stopAddress: {
          street: rawFormData.stopAddress.street || "",
          city: rawFormData.stopAddress.city || "",
          state: rawFormData.stopAddress.state || "",
          zip: rawFormData.stopAddress.zip || "",
          country: rawFormData.stopAddress.country || "",
        },
      }),
      stopInterest: rawFormData.stopInterest,
      stopResNum: rawFormData.stopResNum,
      stopNotes: rawFormData.stopNotes,
      stopPhoneNumber: rawFormData.stopPhoneNumber,
      stopEmail: rawFormData.stopEmail,
    });

    await newStop.save();
    if (!newStop) {
      return NextResponse.json({ error: "Stop not created" }, { status: 403 });
    }

    await tripCollection.updateOne(
      { _id: new ObjectId(tripId) },
      { $push: { stops: newStop._id } }
    );
    console.log("newAccommodation", newAccommodation);

    return NextResponse.json(newStop , { status: 200 });
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

export async function DELETE(request) {

  const stopId = request.nextUrl.searchParams.get('stopId')
  // console.log('DELETE STOP ROUTE HIT', stopId);
  try {
    const client = await mongoClient();
    const db = client.db("planur_v2");
    const stopCollection = db.collection("stops");

    const stop = await stopCollection.findOne({ _id: new ObjectId(stopId) });
    if (!stop) {
      return NextResponse.json({ error: "Stop not found" }, { status: 403 });
    }

    await stopCollection.deleteOne({ _id: new ObjectId(stopId) });
    return NextResponse.json({ message: "Stop deleted" }, { status: 200 });
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