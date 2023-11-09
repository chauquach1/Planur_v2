const punycode = require("punycode/");
import connectMongoDB from "../../libs/mongo/mongodb.js"
import User from "../../models/user.js"

export default async function getTrip(uuid) {
  await connectMongoDB();

  const user = await User.findOne({ uuid });
  return user; // Return the user data directly
}