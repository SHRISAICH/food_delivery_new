const { body, query } = require("express-validator");

const categories = ["pizza", "burger", "sushi", "pasta", "drinks", "dessert", "healthy", "other"];

exports.foodRules = [
  body("name").trim().notEmpty().withMessage("Name is required").isLength({ max: 200 }),
  body("description").trim().notEmpty().withMessage("Description is required").isLength({ max: 1000 }),
  body("price").isFloat({ min: 0 }).withMessage("Price must be a positive number"),
  body("category").isIn(categories).withMessage("Invalid category"),
  body("image").optional().isURL().withMessage("Image must be a valid URL"),
  body("available").optional().isBoolean(),
];

exports.foodQueryRules = [
  query("category").optional().isIn(["all", ...categories]).withMessage("Invalid category"),
  query("search").optional().isString().trim().isLength({ max: 100 }).withMessage("Search must be 100 characters or fewer"),
  query("minPrice").optional().isFloat({ min: 0 }).withMessage("minPrice must be a non-negative number").toFloat(),
  query("maxPrice")
    .optional()
    .isFloat({ min: 0 })
    .withMessage("maxPrice must be a non-negative number")
    .toFloat()
    .custom((maxPrice, { req }) => req.query.minPrice === undefined || maxPrice >= req.query.minPrice)
    .withMessage("maxPrice must be greater than or equal to minPrice"),
  query("available").optional().isBoolean().withMessage("available must be true or false"),
  query("sort").optional().isIn(["price-asc", "price-desc", "rating"]).withMessage("Invalid sort option"),
  query("page").optional().isInt({ min: 1 }).withMessage("page must be a positive integer"),
  query("limit").optional().isInt({ min: 1, max: 50 }).withMessage("limit must be an integer from 1 to 50"),
];
