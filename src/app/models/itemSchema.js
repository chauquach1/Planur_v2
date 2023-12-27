import mongoose from "mongoose";
const itemSchema = new mongoose.Schema({
  itemName: {
    type: String,
    required: true
  },
  packed: {
    type: Boolean,
    required: true,
    default: false
  }
}, { timestamps: true });

const Item = mongoose.models.Item || mongoose.model("Item", itemSchema);

export default Item;
