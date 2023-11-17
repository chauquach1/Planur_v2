'use server'
import mongoose from "mongoose";
import {format} from 'date-fns';

let isConnectedBefore = false;

function logWithTimestamp(...messages) {
  const timestamp = format(new Date(), 'pp');
  console.log(...messages, timestamp);
}

const mongoClient = async () => {
  const mongoURI = process.env.MONGODB_URI;

  // Check if MongoDB URI is provided
  if (!mongoURI) {
    console.error("MongoDB URI not provided in environment variables.");
    return;
  }

  // Avoid creating a new connection if one already exists
  if (mongoose.connection.readyState === 1) {
    logWithTimestamp("Using existing MongoDB connection.");
    return mongoose.connection.getClient();
  }

  try {
    // Connect to MongoDB
    await mongoose.connect(mongoURI);
    logWithTimestamp("Connected to MongoDB.");

    isConnectedBefore = true;

    // Return the MongoDB client
    return mongoose.connection.getClient();
  } catch (error) {
    logWithTimestamp("MongoDB connection error:", error);
    throw error;
  }

  mongoose.connection.on("error", (err) => {
    console.error("MongoDB connection error:", err);
    if (!isConnectedBefore) {
      process.exit(1);
    }
  });

  mongoose.connection.on("disconnected", () => {
    console.log("MongoDB disconnected.");
    if (isConnectedBefore) {
      connectMongoDB();
    }
  });

  process.on("SIGINT", async () => {
    await mongoose.connection.close();
    console.log("MongoDB connection closed due to app termination.");
    process.exit(0);
  });
};

export default mongoClient;
