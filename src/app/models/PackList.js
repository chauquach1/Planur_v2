import mongoose from "mongoose";

const packList = new mongoose.Schema({
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
    phoneNumber: String, // Consider using String for flexibility
    email: String,
    address: String,
    relationship: String,
  }
}, { timestamps: true });

const PackList = mongoose.model('PackList', packListSchema);

export default PackList;