import mongoose from "mongoose";

const packListSchema = new mongoose.Schema({
  clothes: {
    shirts: Boolean,
    pants: Boolean,
    shorts: Boolean,
    sweater: Boolean,
    underwear: Boolean,
  },
  luggage: {
    backpack: Boolean,
    carryon: Boolean,
    dufflebag: Boolean,
    suitcase: Boolean,
    garmentbag: Boolean,
  },
  toiletries: {
    toothbrush: Boolean,
    toothpaste: Boolean,
    shampoo: Boolean,
    conditioner: Boolean,
    sunscreen: Boolean,
  },
  miscellaneous: {
    cellphone: Boolean,
    laptop: Boolean,
    tablet: Boolean,
    passport: Boolean,
    medication: Boolean,
  },
  emergencyContact: {
    firstName: String,
    lastName: String,
    relationship: String,
    phoneNumber: String, // Consider using String for flexibility
    email: String,
    address: {
      street: String,
      city: String,
      state: String,
      zip: String,
      country: String,
    },
  }
}, { timestamps: true });

const PackList = mongoose.models.PackList || mongoose.model('PackList', packListSchema);

export default PackList;