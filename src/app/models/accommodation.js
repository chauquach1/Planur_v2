import mongoose from "mongoose";

const accommodationSchema = new mongoose.Schema(
  {
    accomName: String,
    accomType: {
      type: String, // Example: "hotel", "bnb", "resort", etc.
      enum: [
        "Hotel",
        "Vacation Rental",
        "Resort",
        "Hostel",
        "Friends/Family",
        "Other",
      ], // Define valid types
      default: undefined,
    },
    accomCheckIn: { type: String, default: undefined }, // Use Date for date/time fields
    accomCheckOut: { type: String, default: undefined },
    accomAddress: {
      street: { type: String, default: undefined },
      city: { type: String, default: undefined },
      state: { type: String, default: undefined },
      zip: { type: String, default: undefined },
      country: { type: String, default: undefined },
      type: Object, 
      default: undefined ,
    },
    accomPhoneNumber: { type: String, default: undefined }, // Consider using String for flexibility
    accomEmail: { type: String, default: undefined },
    accomResNum: { type: String, default: undefined },
  },
  { timestamps: true }
);

const Accommodation =
  mongoose.models.Accommodation ||
  mongoose.model("Accommodation", accommodationSchema);

export default Accommodation;
