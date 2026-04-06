const mongoose = require("mongoose");

const foodSchema = new mongoose.Schema(
  {
    name: { type: String, required: [true, "Food name is required"], trim: true, maxlength: 200 },
    description: { type: String, required: true, maxlength: 1000 },
    price: { type: Number, required: [true, "Price is required"], min: 0 },
    category: {
      type: String, required: true,
      enum: ["pizza", "burger", "sushi", "pasta", "drinks", "dessert", "healthy", "other"],
      index: true,
    },
    image: { type: String, default: "" },
    available: { type: Boolean, default: true, index: true },
    rating: { type: Number, default: 0, min: 0, max: 5 },
    preparationTime: { type: String, default: "25 min" },
    tags: [String],
  },
  { timestamps: true }
);

foodSchema.index({ name: "text", description: "text" });
foodSchema.index({ price: 1 });

module.exports = mongoose.model("Food", foodSchema);
