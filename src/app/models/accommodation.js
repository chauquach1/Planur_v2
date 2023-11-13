import mongoose from 'mongoose';
import { useContext } from 'react';

const accommodationSchema = new mongoose.Schema({
  accomName: String,
  accomType: {
    type: String, // Example: "hotel", "bnb", "resort", etc.
    enum: ["Hotel", "Vacation Rental", "Resort", "Hostel", "Other"], // Define valid types
  },
  accomCheckIn: Date, // Use Date for date/time fields
  accomCheckOut: Date,
  accomAddress: {
    street: String,
    city: String,
    state: String,
    zip: String,
    country: String,
  },
  accomPhoneNumber: String, // Consider using String for flexibility
  accomEmail: String,
  accomResNum: String,
}, { timestamps: true });

const Accommodation = mongoose.models.Accommodation || mongoose.model('Accommodation', accommodationSchema);

export default Accommodation;