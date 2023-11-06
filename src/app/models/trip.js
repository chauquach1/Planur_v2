import mongoose from "mongoose";

const tripSchema = new mongoose.Schema(
  {
    accommodations: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Accommodation' }],
    address: String,
    destination: String,
    startDate: {
      type: Date,
      required: true,
      validate: {
        validator: (date) => {
          return date >= new Date(); // Check if start date is in the future
        },
        message: 'Start date must be in the future',
      },
    },
    endDate: {
      type: Date,
      required: true,
      validate: {
        validator: function (date) {
          return date >= this.startDate; // Check if end date is after start date
        },
        message: 'End date must be after start date',
      },
    },
    guests: Number,
    stops: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Stop' }],
    reason: String,
    transportation: String,
    tripName: String,
    packLists: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Packlists',
      default: null, // You can specify a default value or leave it as null
    },
  },
  { timestamps: true }
);

const Trip = mongoose.model('Trip', tripSchema);

module.exports = Trip;