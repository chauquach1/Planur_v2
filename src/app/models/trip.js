import mongoose from "mongoose";
const tripSchema = new mongoose.Schema(
  {
    accommodations: [
      { type: mongoose.Schema.Types.ObjectId, ref: "Accommodation" },
    ],
    // tripAddress: {
    //   street: String,
    //   city: String,
    //   state: String,
    //   zip: String,
    //   country: String,
    // },
    tripDestination: String,
    tripStartDate: {
      type: String,
      required: true,
    },
    tripEndDate: {
      type: String,
      required: true,
    },
    // tripAccommodation: String,
    // tripGuests: Number,
    stops: [{ type: mongoose.Schema.Types.ObjectId, ref: "Stop" }],
    tripReason: String,
    // tripTransportation: String,
    tripName: String,
    packList: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "PackList",
      default: null, // You can specify a default value or leave it as null
    },
  },
  { timestamps: true }
);
const Trip = mongoose.models.Trip || mongoose.model('Trip', tripSchema);

export default Trip;