import mongoose from "mongoose";
import Item from "./itemSchema.js";
const packListSchema = new mongoose.Schema({
  essentials: [Item],
  accessories: [Item],
  baby: [Item],
  backpack: [Item],
  beach: [Item],
  biking: [Item],
  camping: [Item],
  clothing: [Item],
  electronics: [Item],
  food: [Item],
  gym: [Item],
  healthcare: [Item],
  hiking: [Item],
  kitchen: [Item],
  makeup: [Item],
  photography: [Item],
  running: [Item],
  shoes: [Item],
  snowsports: [Item],
  swimming: [Item],
  toiletries: [Item],
  work: [Item],
}, { timestamps: true });

const PackList = mongoose.models.PackList || mongoose.model('PackList', packListSchema);

export default PackList;