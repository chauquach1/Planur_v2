import connectMongoDB from "../../libs/mongo/mongodb";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    const client = await connectMongoDB();
    const db = client.db('planur_v2');
    const collection = db.collection("users");

    // Get 'uuid' from request.query
    const { uuid } = await request.query;
    console.log('UUID:', uuid);

    // Check if uuid is provided
    if (!uuid) {
      return NextResponse.json({ error: "UUID parameter is missing" }, { status: 400 });
    }

    // Find the user in the database
    const user = await collection.findOne({ uuid: uuid });
    if (!user) {
      console.log('User not found');
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // Return the found user
    return NextResponse.json({ user }, { status: 200 });
  } catch (error) {
    console.log("Error fetching user data:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  } finally {
    // Close the client if it's defined
    if (client) {
      await client.close();
    }
  }
}
