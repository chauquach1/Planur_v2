import mongoose from "mongoose";

const stopSchema = new mongoose.Schema(
  {
    stopName: String,
    stopAddress: {
      street: { type: String, default: undefined },
      city: { type: String, default: undefined },
      state: { type: String, default: undefined },
      zip: { type: String, default: undefined },
      country: { type: String, default: undefined },
      type: Object,
      default: undefined,
    },
    stopArrival: { type: String, default: undefined }, // Use Date for date/time fields
    stopDeparture: { type: String, default: undefined },
    stopType: {
      type: String, // Example: "rest stop", "landmark", etc.
      enum: [
        "Restaurant",
        "Food",
        "Landmark",
        "Family",
        "Friends",
        "Museum",
        "Attractions",
        "Other",
      ], // Define valid types
      default: undefined,
    },
    stopTransportation: { type: String, default: undefined },
    stopInterest: { type: String, default: undefined },
    stopResNum: { type: String, default: undefined },
    stopNotes: { type: String, default: undefined },
    stopPhoneNumber: { type: String, default: undefined },
    stopEmail: { type: String, default: undefined },
  },
  { timestamps: true }
);

const Stop = mongoose.models.Stop || mongoose.model('Stop', stopSchema);

export default Stop;