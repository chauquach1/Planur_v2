import mongoose from "mongoose";

const connectMongoDB = async () => {
  const mongoURI = process.env.MONGODB_URI;

  try {
    // Connect to MongoDB
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
    });

    // MongoDB connected event handler
    mongoose.connection.on("connected", () => {
      console.log("Connected to MongoDB.");
    });

    // MongoDB error event handler
    mongoose.connection.on("error", (err) => {
      console.error("MongoDB connection error:", err);
    });

    // MongoDB disconnected event handler
    mongoose.connection.on("disconnected", () => {
      console.log("MongoDB disconnected.");
    });

    // Handle Node.js process termination to close the MongoDB connection
    process.on("SIGINT", () => {
      mongoose.connection.close(() => {
        console.log("MongoDB connection closed due to app termination.");
        process.exit(0);
      });
    });
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
};

export default connectMongoDB ;