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
        validator: function(date) {
          // Convert the provided date and the current date to their 'start of day' values
          const userStartDate = new Date(date).setHours(0, 0, 0, 0);
          const currentDate = new Date().setHours(0, 0, 0, 0);
    
          // Check if the user start date is today or in the future
          return userStartDate >= currentDate;
        },
        message: 'Start date must be today or in the future',
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
    packList: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'PackList',
      default: null, // You can specify a default value or leave it as null
    },
  },
  { timestamps: true }
);

const Trip = mongoose.models.Trip || mongoose.model('Trip', tripSchema);

export default Trip;