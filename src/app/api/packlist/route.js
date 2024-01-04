import {mongoClient} from "../../libs/mongo/mongodb";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";
import PackList from "../../models/PackList";

export async function POST(request) {
  // const { tripId, uuid, ...packListDetails } = await request.json();
  console.log('POST PACKLIST ROUTE HIT');
  const  {tripId, ...updatedPackList}   = await request.json();
  // console.log('updatedPackList', updatedPackList);
  // console.log('tripId', tripId);

  // const entries = Object.entries(updatedPackList);
  // const keys = Object.keys(updatedPackList);
  // const values = Object.values(updatedPackList);
  // console.log('updatedPackList', Object.entries(updatedPackList));


  // try {
    // const client = await mongoClient();
    // const db = client.db("planur_v2");
    // const tripCollection = db.collection("trips");

    // if (!tripId) {
    //   return NextResponse.json(
    //     { error: "Trip ID parameter is missing" },
    //     { status: 400 }
    //   );
    // }

    // const trip = await tripCollection.findOne({ _id: new ObjectId(tripId) });
    // if (!trip) {
    //   return NextResponse.json({ error: "Trip not found" }, { status: 402 });
    // }

    // const newPackList = new PackList({
    //   ...updatedPackList
    // });

    // try {
    //   await newPackList.save();
    // } catch (error) {
    //   console.error("Error saving packList:", error);
    // }
  

    // await tripCollection.updateOne(
    //   { _id: new ObjectId(tripId) },
    //   { $set : {packList: newPackList._id} }
    // );

    return NextResponse.json( {updatedPackList} , { status: 200 });
  // } catch {
  //   return NextResponse.json(
  //     { error: "Something went wrong" },
  //     { status: 500 }
  //   );
  // }
}

export async function PUT(request) {
  console.log("PACKLIST PUT ROUTE HIT");
  const { category, item } = await request.json();
  console.log('category, item: ', category, item);

  // try {
  //   const client = await mongoClient();
  //   const db = client.db("planur_v2");
  //   const userCollection = db.collection("users");
  //   const tripCollection = db.collection("trips");

  //   if (!tripId) {
  //     return NextResponse.json(
  //       { error: "Trip ID parameter is missing" },
  //       { status: 400 }
  //     );
  //   }
  //   const user = await userCollection.findOne({ uuid: uuid });
  //   if (!user) {
  //     return NextResponse.json({ error: "User not found" }, { status: 401 });
  //   }
  //   const trip = await tripCollection.findOne({ _id: new ObjectId(tripId) });
  //   if (!trip) {
  //     return NextResponse.json({ error: "Trip not found" }, { status: 402 });
  //   }



  //   const packListToUpdate = await PackList.findByIdAndUpdate(
  //     { _id: new ObjectId(packListId) },
  //     { 
  //       clothes: updatedPackListDetails.clothes,
  //       luggage: updatedPackListDetails.luggage,
  //       toiletries: updatedPackListDetails.toiletries,
  //       miscellaneous: updatedPackListDetails.miscellaneous,
  //       emergencyContact: updatedPackListDetails.emergencyContact,
  //     },
  //     { new: true } // This option returns the updated document
  //   );

  //   if (!packListToUpdate) {
  //     return NextResponse.json(
  //       { error: "PackList not found or update failed" },
  //       { status: 404 }
  //     );
  //   }
    return NextResponse.json( item, { status: 200 });
  // } catch {
  //   return NextResponse.json(
  //     { error: "Something went wrong" },
  //     { status: 500 }
  //   );
  // }
}

export async function GET(request) {
  console.log('GET PACKLIST ROUTE HIT');
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