"use server";
import {mongoClient} from "../../libs/mongo/mongodb";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";
import PackList from "../../models/PackList";
import { use } from "react";

export async function POST(request) {
  console.log('POST PACKLIST ROUTE HIT');
  const tripId = request.nextUrl.searchParams.get('tripId');
  const  updatedPackList   = await request.json();
  // console.log('tripId', tripId);
  // console.log('updatedPackList', updatedPackList);

  // const entries = Object.entries(updatedPackList);
  // const keys = Object.keys(updatedPackList);
  // const values = Object.values(updatedPackList);
  // console.log('updatedPackList', Object.entries(updatedPackList));


  try {
    const client = await mongoClient();
    const db = client.db("planur_v2");
    const tripCollection = db.collection("trips");

    if (!tripId) {
      return NextResponse.json(
        { error: "Trip ID parameter is missing" },
        { status: 400 }
      );
    }

    const trip = await tripCollection.findOne({ _id: new ObjectId(tripId) });
    if (!trip) {
      return NextResponse.json({ error: "Trip not found" }, { status: 402 });
    }

    const newPackList = new PackList({
      ...updatedPackList
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

    return NextResponse.json( {updatedPackList} , { status: 200 });
  } catch {
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}

export async function PUT(request) {
  console.log("PACKLIST PUT ROUTE HIT");
  const {_id, ...updatedPackList} = await request.json();
  const packListId = _id;
  console.log('_id: ', _id);
  console.log('updatedPackList: ', updatedPackList);

  try {
    const client = await mongoClient();
    const db = client.db("planur_v2");
    const packListsCollection = db.collection("packListsCollection");
    const tripCollection = db.collection("trips");

    const packListToUpdate = await PackList.findByIdAndUpdate(
      { _id: new ObjectId(packListId) },
      { $set: updatedPackList },
      { new: true } // This option returns the updated document
    );

    if (!packListToUpdate) {
      return NextResponse.json(
        { error: "PackList not found or update failed" },
        { status: 404 }
      );
    }
    return NextResponse.json( updatedPackList, { status: 200 });
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
    const packListId = request.nextUrl.searchParams.get('packListId')
    
    if (!packListId) {
      return NextResponse.json({ error: "TripId parameter is missing" }, { status: 400 });
    }

    const db = client.db("planur_v2");
    const packListsCollection = db.collection("packlists");

    const packList = await packListsCollection.findOne({ _id: new ObjectId(packListId)})
    return NextResponse.json( packList , { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}