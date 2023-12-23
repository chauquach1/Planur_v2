import mongoose from "mongoose";

const packListSchema = new mongoose.Schema({
  essentials: [String],
  accessories: [String],
  baby: [String],
  backpack: [String],
  beach: [String],
  biking: [String],
  camping: [String],
  clothing: [String],
  electronics: [String],
  food: [String],
  gym: [String],
  healthcare: [String],
  hiking: [String],
  kitchen: [String],
  makeup: [String],
  photography: [String],
  running: [String],
  shoes: [String],
  snowsports: [String],
  swimming: [String],
  toiletries: [String],
  work: [String],
}, { timestamps: true });

const PackList = mongoose.models.PackList || mongoose.model('PackList', packListSchema);

export default PackList;