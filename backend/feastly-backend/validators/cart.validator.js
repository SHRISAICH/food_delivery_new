const { body } = require("express-validator");

exports.addToCartRules = [
  body("foodId").isMongoId().withMessage("Valid food ID is required"),
  body("quantity").optional().isInt({ min: 1, max: 50 }).withMessage("Quantity must be an integer from 1 to 50").toInt(),
];

exports.updateCartItemRules = [
  body("quantity").isInt({ min: 0, max: 50 }).withMessage("Quantity must be an integer from 0 to 50").toInt(),
];