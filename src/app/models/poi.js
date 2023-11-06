import mongoose from "mongoose";

const poiSchema = new mongoose.Schema({
  name: String,
  address: String,
  arrival: Date, // Use Date for date/time fields
  departure: Date,
  phoneNumber: String, // Consider using String for flexibility
  email: String,
  type: {
    type: String, // Example: "restaurant", "museum", "park", etc.
    enum: ["restaurant", "museum", "park", "other"], // Define valid types
  },
  interest: String,
  transportation: String,
  resNum: String,
  notes: String,
}, { timestamps: true });

const Poi = mongoose.model('Poi', poiSchema);

module.exports = Poi;