import mongoose from "mongoose";

const tripSchema = new mongoose.Schema(
  {
    accommodations: [
      { type: mongoose.Schema.Types.ObjectId, ref: "Accommodation" },
    ],
    address: String,
    destination: String,
    startDate: {
      type: Date,
      required: true,
    },
    endDate: {
      type: Date,
      required: true,
    },
    guests: Number,
    stops: [{ type: mongoose.Schema.Types.ObjectId, ref: "Stop" }],
    reason: String,
    transportation: String,
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