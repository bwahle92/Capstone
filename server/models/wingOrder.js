import mongoose from "mongoose";

const orderSchema = new.mongoose.Schema({

})
const foodOrder = mongoose.model("foodOrder", orderSchema);

export default foodOrder;
