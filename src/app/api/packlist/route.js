import {mongoClient} from "../../libs/mongo/mongodb";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";
import PackList from "../../models/PackList";

export async function POST(request) {
  const { tripId, uuid, ...packListDetails } = await request.json();
  console.log('POST PACKLIST ROUTE HIT', tripId, uuid, packListDetails);

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
    const trip = await tripCollection.findOne({ _id: new ObjectId(tripId) });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 401 });
    }

    if (!trip) {
      return NextResponse.json({ error: "Trip not found" }, { status: 402 });
    }

    const newPackList = new PackList({
      clothes: packListDetails.clothes,
      luggage: packListDetails.luggage,
      toiletries: packListDetails.toiletries,
      miscellaneous: packListDetails.miscellaneous,
      emergencyContact: packListDetails.emergencyContact,
    });

    try {
      await newPackList.save();
    } catch (error) {
      console.error("Error saving packList:", error);
    }
  

    await tripCollection.updateOne(
      { _id: new ObjectId(tripId) },
      { $set : {packList: newPackList._id} }
    );

    return NextResponse.json({ newPackList }, { status: 200 });
  } catch {
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}

export async function PUT(request) {
  const { packListId, tripId, uuid, ...updatedPackListDetails } = await request.json();

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



    const packListToUpdate = await PackList.findByIdAndUpdate(
      { _id: new ObjectId(packListId) },
      { 
        clothes: updatedPackListDetails.clothes,
        luggage: updatedPackListDetails.luggage,
        toiletries: updatedPackListDetails.toiletries,
        miscellaneous: updatedPackListDetails.miscellaneous,
        emergencyContact: updatedPackListDetails.emergencyContact,
      },
      { new: true } // This option returns the updated document
    );

    if (!packListToUpdate) {
      return NextResponse.json(
        { error: "PackList not found or update failed" },
        { status: 404 }
      );
    }
    return NextResponse.json( packListToUpdate, { status: 200 });
  } catch {
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
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
    const packListsCollection = db.collection("packlists");

    const trip = await tripsCollection.findOne({ _id: new ObjectId(tripId)})
    if (!trip || !trip.stops) {
      return NextResponse.json({ error: "Stops not found" }, { status: 401 });
    }

    const tripPackListId = new ObjectId(trip.packList);
    const packList = await packListsCollection.findOne({ _id: new ObjectId(tripPackListId)})

    return NextResponse.json( packList , { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}