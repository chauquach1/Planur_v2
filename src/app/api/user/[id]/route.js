import {mongoClient} from "../../../libs/mongo/mongodb";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";
import User from "../../../models/user";

export async function GET(request, {params}) {
  try {
    const client = await mongoClient();
    const { id } = await params;
    // console.log("id", id);
    if (!id) {
      return NextResponse.json({ error: "Email parameter is required" }, { status: 400 });
    }

    const db = client.db("planur_v2");
    const users = db.collection("users")
    const user = await users.findOne({ email: id});
    // console.log("user from mongoDB", user);
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // Return the found user
    return NextResponse.json(user, { status: 200 });
  } catch (error) {
    // console.log('error from mongoDB', error);
    return NextResponse.json(error, { status: 500 });
  } 
}

// export async function POST(request) {
//   client = await mongoClient();
//   try {
//     const { userEmail, newEmail, newFirstName, newLastName } = req.body;

//     if (!userEmail) {
//       return res.status(400).json({ error: "Email is required" });
//     }

//     const db = client.db("planur_v2");
//     const user = await db.collection("users").findOne({ email: userEmail });

//     if (!user) {
//       console.log("User not found");
//       return res.status(404).json({ error: "User not found" });
//     }

//     // Construct the update object
//     const updateData = {};
//     if (newEmail) updateData.email = newEmail;
//     if (newFirstName) updateData.firstName = newFirstName;
//     if (newLastName) updateData.lastName = newLastName;

//     // Update the user's information
//     await db
//       .collection("users")
//       .updateOne({ email: userEmail }, { $set: updateData });

//     return res.status(200).json({ message: "User updated successfully" });
//   } catch (error) {
//     console.log(error);
//     return res.status(500).json({ error: error.message });
//   } finally {
//     client.close();
//   }
// }
