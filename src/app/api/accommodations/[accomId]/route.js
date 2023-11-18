import mongoClient from "../../libs/mongo/mongodb";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";


export async function GET(request, { params: { id }}) {
  const client = await mongoClient();

  try {
    const accomId = request.nextUrl.searchParams.get('accomId')
    
    if (!accomId) {
      console.log('NO TRIP ID', accomId);
      return NextResponse.json({ error: "TripId parameter is missing" }, { status: 400 });
    }

    const db = client.db("planur_v2");
    const accommodationsCollection = db.collection("accommodations");
    const accommodation = await accommodationsCollection.find({ _id: new ObjectId(id)});

    return NextResponse.json( accommodation , { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
