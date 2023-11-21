'use client'
import mongoClient from "../../libs/mongo/mongodb.js";
import User from "../../models/user";

export default async function signUp(data) {
  console.log("request.body:", data);
  client = await mongoClient();
  try {
    const sbUser = data.user;
    const userEmail = sbUser.email;
    const firstName = sbUser.user_metadata.firstName;
    const lastName = sbUser.user_metadata.lastName;
    const uuid = sbUser.id;


    if (!userEmail) {
      return res.status(400).json({ error: "Email is required" });
    }

    const db = client.db("planur_v2");
    const user = await new User({
      email: userEmail,
      firstName: firstName,
      lastName: lastName,
      uuid: uuid,
    });
    

    if (!user) {
      console.log("User not found");
      return res.status(404).json({ error: "User not found" });
    }
    console.log("user data submitted to mongo:", user);
    return res.status(200).json({ message: "User updated successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error.message });
  } finally {
    client.close();
  }
}

// export async function signUp(request) {
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
