import mongoose from "mongoose";

const stopSchema = new mongoose.Schema({
  stopName: String,
  stopAddress: {
    street: String,
    city: String,
    state: String,
    zip: String,
    country: String,
  },
  stopArrival: Date, // Use Date for date/time fields
  stopDeparture: Date,
  stopType: {
    type: String, // Example: "rest stop", "landmark", etc.
    enum: ["Restaurant", "Food", "Landmark", "Family", "Friends", "Museum", "Attractions", "Other"], // Define valid types
  },
  stopTransportation: String,
  stopInterest: String,
  stopResNum: String,
  stopNotes: String,
  stopPhoneNumber: String,
  stopEmail: String
}, { timestamps: true });

const Stop = mongoose.models.Stop || mongoose.model('Stop', stopSchema);

export default Stop;