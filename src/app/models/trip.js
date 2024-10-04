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
      default: undefined
    },
  },
  { timestamps: true }
);
const Trip = mongoose.models.Trip || mongoose.model('Trip', tripSchema);

export default Trip;