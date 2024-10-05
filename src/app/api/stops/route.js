import {mongoClient} from "../../libs/mongo/mongodb";
import { ObjectId } from "mongodb";
import Stop from "../../models/stop"
import { NextResponse } from "next/server";


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
    console.log("newStop", newStop);

    return NextResponse.json(newStop , { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

export async function PUT(request) {
  console.log('PUT STOP ROUTE HIT');
  const updatedStop = await request.json();
  const stopId = updatedStop._id;

  console.log('updatedStop', updatedStop);
  try {
    const client = await mongoClient();
    const db = client.db("planur_v2");
    const stopsCollection = db.collection("stops");
    
    const stop = await stopsCollection.findOne({ _id: new ObjectId(stopId) });
    if (!stop) {
      console.log('stop not found', stop);
      return NextResponse.json({ error: "Stop not found" }, { status: 402 });
    } else {
      console.log('stop found', stop);
    }

    // Create a new stop
    const stopToUpdate = await Stop.findByIdAndUpdate(
      { _id: new ObjectId(stopId) },
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
  console.log('DELETE STOP ROUTE HIT');
  const stopId = request.nextUrl.searchParams.get('stopId')
  const tripId = request.nextUrl.searchParams.get("tripId");
  try {
    const client = await mongoClient();
    const db = client.db("planur_v2");
    const tripsCollection = db.collection("trips");
    const stopsCollection = db.collection("stops");
    
    // Convert string IDs to ObjectId
    const tripObjectId = new ObjectId(tripId);
    const stopObjectId = new ObjectId(stopId);

    console.log('finding trip');
    const trip = await tripsCollection.findOne({ _id: tripObjectId });
    if (!trip) {
      return NextResponse.json({ error: "Trip not found" }, { status: 402 });
    }

    // Remove the accommodation ID from the trip's stops array
    console.log('removing stop from trip');
    await tripsCollection.updateOne(
      { _id: tripObjectId },
      { $pull: { stops: stopObjectId } }
    );

    // Delete the stop document from stop collection
    console.log('deleting stop with _id', stopObjectId);
    const stop = await stopsCollection.findOneAndDelete({
      _id: stopObjectId,
    });

    console.log('finding if stop still exists in stop collection');
    if (!stop.value) {
      return NextResponse.json({ message: "Stop not found in stopsCollection" }, { status: 200 });
    }
    
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