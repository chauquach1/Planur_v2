import mongoose from 'mongoose';

const accommodationSchema = new mongoose.Schema({
  accomName: String,
  accomType: {
    type: String, // Example: "hotel", "bnb", "resort", etc.
    enum: ["Hotel", "Vacation Rental", "Resort", "Hostel", "Friends/Family", "Other"], // Define valid types
  },
  accomCheckIn: Date, // Use Date for date/time fields
  accomCheckOut: Date,
  accomAddress: {
    street: {type: String, default: undefined},
    city: {type: String, default: undefined},
    state: {type: String, default: undefined},
    zip: {type: String, default: undefined},
    country: {type: String, default: undefined},
  },
  accomPhoneNumber: String, // Consider using String for flexibility
  accomEmail: String,
  accomResNum: String,
}, { timestamps: true });

const Accommodation = mongoose.models.Accommodation || mongoose.model('Accommodation', accommodationSchema);

export default Accommodation;