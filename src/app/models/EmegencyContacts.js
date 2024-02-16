import mongoose from "mongoose";

const emergencyContactSchema = new mongoose.Schema(
  {
    firstName: { type: String, default: undefined },
    lastName: { type: String, default: undefined },
    phoneNumber: { type: String, default: undefined }, // Consider using String for flexibility
    email: { type: String, default: undefined },
    relationship: {
      type: String, // Example: "hotel", "bnb", "resort", etc.
      enum: [
        "Friend",
        "Parent",
        "Spouse",
        "Child",
        "Family",
        "Other"
      ], // Define valid types
      default: undefined,
    },
    address: {
      street: { type: String, default: undefined },
      city: { type: String, default: undefined },
      state: { type: String, default: undefined },
      zip: { type: String, default: undefined },
      country: { type: String, default: undefined },
      type: Object, 
      default: undefined ,
    },
  },
  { timestamps: true }
);

const EmergencyContact =
  mongoose.models.EmergencyContact ||
  mongoose.model("EmergencyContact", emergencyContactSchema);

export default EmergencyContact;
