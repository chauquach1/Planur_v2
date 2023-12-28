import mongoose from "mongoose";
import itemSchema from "./itemSchema.js";
const packListSchema = new mongoose.Schema({
  essentials: [itemSchema],
  accessories: [itemSchema],
  baby: [itemSchema],
  backpack: [itemSchema],
  beach: [itemSchema],
  biking: [itemSchema],
  camping: [itemSchema],
  clothing: [itemSchema],
  electronics: [itemSchema],
  food: [itemSchema],
  gym: [itemSchema],
  healthcare: [itemSchema],
  hiking: [itemSchema],
  kitchen: [itemSchema],
  makeup: [itemSchema],
  photography: [itemSchema],
  running: [itemSchema],
  shoes: [itemSchema],
  snowsports: [itemSchema],
  swimming: [itemSchema],
  toiletries: [itemSchema],
  work: [itemSchema],
}, { timestamps: true });

const PackList = mongoose.models.PackList || mongoose.model('PackList', packListSchema);

export default PackList;