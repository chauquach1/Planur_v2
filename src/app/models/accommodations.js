import mongoose from 'mongoose';

const accommodationSchema = new mongoose.Schema({
  name: String,
  type: {
    type: String, // Example: "hotel", "bnb", "resort", etc.
    enum: ["hotel", "bnb", "resort", "other"], // Define valid types
  },
  checkIn: Date, // Use Date for date/time fields
  checkOut: Date,
  address: String,
  phoneNumber: String, // Consider using String for flexibility
  email: String,
  resNum: String,
}, { timestamps: true });

const Accommodation = mongoose.model('Accommodation', accommodationSchema);

module.exports = Accommodation;