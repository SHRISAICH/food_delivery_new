const { body } = require("express-validator");

exports.placeOrderRules = [
  body("deliveryAddress").notEmpty().withMessage("Delivery address is required"),
  body("deliveryAddress.street").trim().notEmpty().withMessage("Street is required"),
  body("deliveryAddress.city").trim().notEmpty().withMessage("City is required"),
  body("deliveryAddress.pincode").trim().notEmpty().withMessage("Pincode is required"),
  body("paymentId").optional().isString(),
];

exports.updateStatusRules = [
  body("status")
    .isIn(["pending", "confirmed", "preparing", "out_for_delivery", "delivered", "cancelled"])
    .withMessage("Invalid order status"),
];
