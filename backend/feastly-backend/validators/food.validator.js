const { body } = require("express-validator");

exports.foodRules = [
  body("name").trim().notEmpty().withMessage("Name is required").isLength({ max: 200 }),
  body("description").trim().notEmpty().withMessage("Description is required").isLength({ max: 1000 }),
  body("price").isFloat({ min: 0 }).withMessage("Price must be a positive number"),
  body("category").isIn(["pizza", "burger", "sushi", "pasta", "drinks", "dessert", "healthy", "other"]).withMessage("Invalid category"),
  body("image").optional().isURL().withMessage("Image must be a valid URL"),
  body("available").optional().isBoolean(),
];
