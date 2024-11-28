import mongoose from "mongoose";

const itemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  price: {
    type: Number,
    required: true
  }
});

const orderSchema = new mongoose.Schema({
  items: {
    type: [itemSchema],
    required: true
  }
});
const foodOrder = mongoose.model("foodOrder", orderSchema);

export default foodOrder;
