import { Router } from "express";
import foodOrder from "../models/wingOrder.js";

const router = Router();

// Create food order route route - http://localhost:4040/orderConfirmation
router.post("/", async (request, response) => {
  try {
    const newOrder = new foodOrder(request.body);

    const data = await newOrder.save();

    response.json(data);
  } catch (error) {
    // Output error to the console incase it fails to send in response
    console.log(error);

    if ("name" in error && error.name === "ValidationError")
      return response.status(400).json(error.errors);

    return response.status(500).json(error.errors);
  }
});

// Get all orders route
router.get("/", async (request, response) => {
  try {
    // Store the query params into a JavaScript Object
    const query = request.query; // Defaults to an empty object {}

    const data = await foodOrder.find(query);

    response.json(data);
  } catch (error) {
    // Output error to the console incase it fails to send in response
    console.log(error);

    return response.status(500).json(error.errors);
  }
});

// Delete an order by ID
router.delete("/:id", async (request, response) => {
  try {
    const data = await foodOrder.findByIdAndDelete(request.params.id);

    response.json(data);
  } catch (error) {
    // Output error to the console incase it fails to send in response
    console.log(error);

    return response.status(500).json(error.errors);
  }
});

export default router;
