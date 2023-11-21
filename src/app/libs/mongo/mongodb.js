'use server'
import mongoose from "mongoose";
import {format} from 'date-fns';

let isConnectedBefore = false;



const mongoClient = async () => {
  const mongoURI = process.env.MONGODB_URI;

  // Check if MongoDB URI is provided
  if (!mongoURI) {
    console.error("MongoDB URI not provided in environment variables.");
    return;
  }

  // Avoid creating a new connection if one already exists
  if (mongoose.connection.readyState === 1) {
    console.log("Using existing MongoDB connection.");
    return mongoose.connection.getClient();
  }

  try {
    // Connect to MongoDB
    await mongoose.connect(mongoURI);

    isConnectedBefore = true;

    // Return the MongoDB client
    console.log("Creating a new MongoDB connection.");
    return mongoose.connection.getClient();
  } catch (error) {
    console.error("MongoDB connection error:", error);
    throw error;
  }

  mongoose.connection.on("error", (err) => {
    console.error("MongoDB connection error:", err);
    if (!isConnectedBefore) {
      process.exit(1);
    }
  });

  mongoose.connection.on("disconnected", () => {
    if (isConnectedBefore) {
      connectMongoDB();
    }
  });

  process.on("SIGINT", async () => {
    await mongoose.connection.close();
    process.exit(0);
  });
};

export default mongoClient;
