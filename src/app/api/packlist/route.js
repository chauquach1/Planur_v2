import mongoClient from "../../libs/mongo/mongodb";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";
import PackList from "../../models/packList";

export async function POST(request) {
  const { tripId, uuid, ...packListDetails } = await request.json();

  try {
    const client = await mongoClient();
    const db = client.db("planur_v2");
    const userCollection = db.collection("users");
    const tripCollection = db.collection("trips");

    if (!tripId) {
      console.log("NO TRIP ID", tripId);
      return NextResponse.json(
        { error: "Trip ID parameter is missing" },
        { status: 400 }
      );
    }
    const user = await userCollection.findOne({ uuid: uuid });
    const trip = await tripCollection.findOne({ _id: new ObjectId(tripId) });

    if (!user) {
      console.log("NO USER", user);
      return NextResponse.json({ error: "User not found" }, { status: 401 });
    }

    if (!trip) {
      console.log("NO TRIP", trip);
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
      console.log('newPackList before', newPackList);
      await newPackList.save();
      console.log('newPackList after', newPackList);
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
