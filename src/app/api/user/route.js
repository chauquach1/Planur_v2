import mongoClient from "../../libs/mongo/mongodb";
import User from "../../models/user";
import { NextResponse } from "next/server";

export async function POST(request) {
  console.log('POST REQUEST HIT');
  const sbData = await request.json();
  let client; 
  try {
    if (!sbData) {
      return NextResponse.json({ error: "User is required" }, { status: 400 });
    }

    console.log('sbUser:', sbData);

    client = await mongoClient();
    const db = client.db("planur_v2");
    const userCollection = db.collection("users");

    const sbUser = sbData.user;

    const userEmail = sbUser.email;
    const firstName = sbUser.user_metadata.firstName;
    const lastName = sbUser.user_metadata.lastName;
    const uuid = sbUser.id;

    const user = new User({
      email: userEmail,
      firstName: firstName,
      lastName: lastName,
      uuid: uuid,
    });

    await userCollection.insertOne(user); // Insert the user data into the MongoDB collection

    console.log("user data submitted to mongo:", user);
    return NextResponse.json(
      { message: "User created successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  } finally {
    client.close();
  }
}
