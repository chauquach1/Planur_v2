import mongoose from "mongoose";

const stopSchema = new mongoose.Schema({
  stopName: String,
  address: String,
  arrival: Date, // Use Date for date/time fields
  departure: Date,
  type: {
    type: String, // Example: "rest stop", "landmark", etc.
    enum: ["rest stop", "landmark", "other"], // Define valid types
  },
  transportation: String,
  interest: String,
  resNum: String,
  notes: String,
}, { timestamps: true });

const Stop = mongoose.model('Stop', stopSchema);

module.exports = Stop;