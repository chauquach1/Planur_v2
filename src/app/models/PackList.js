import mongoose from "mongoose";
import Item from "./itemSchema.js";
const packListSchema = new mongoose.Schema({
  essentials: [],
  accessories: [],
  baby: [],
  backpack: [],
  beach: [],
  biking: [],
  camping: [],
  clothing: [],
  electronics: [],
  food: [],
  gym: [],
  healthcare: [],
  hiking: [],
  kitchen: [],
  makeup: [],
  photography: [],
  running: [],
  shoes: [],
  snowsports: [],
  swimming: [],
  toiletries: [],
  work: [],
}, { timestamps: true });

const PackList = mongoose.models.PackList || mongoose.model('PackList', packListSchema);

export default PackList;