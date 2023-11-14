import connectMongoDB from "../../libs/mongo/mongodb";
import {ObjectId} from 'mongodb';

export async function getTrip(tripIdParam) {
  try {
    if (!tripIdParam) {
      return { error: "Trip ID parameter is missing", status: 400 };
    }

    const client = await connectMongoDB();
    const db = client.db('planur_v2');
    const collection = db.collection("trips");
    const objectId = new ObjectId(tripIdParam); // Renamed to avoid conflict
    
    const trip = await collection.findOne({ _id: objectId });
    
    if (!trip) {
      return { error: "Trip not found", status: 404 };
    }
    return { trip, status: 200 }; // Return a consistent structure
  } catch (error) {
    console.log(error);
    return { error: "Server error", status: 500 };
  }
}
