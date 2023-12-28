import mongoose from "mongoose";
const itemSchema = new mongoose.Schema(
  {
    itemName: String,
    packed: Boolean,
  },
  { timestamps: true }
);

export default itemSchema;