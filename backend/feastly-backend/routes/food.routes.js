const router = require("express").Router();
const { getAllFoods, getFoodById, createFood, updateFood, deleteFood } = require("../controllers/food.controller");
const { protect, adminOnly } = require("../middleware/auth");
const validate = require("../middleware/validate");
const { foodRules } = require("../validators/food.validator");

router.get("/", getAllFoods);
router.get("/:id", getFoodById);
router.post("/", protect, adminOnly, validate(foodRules), createFood);
router.put("/:id", protect, adminOnly, validate(foodRules), updateFood);
router.delete("/:id", protect, adminOnly, deleteFood);

module.exports = router;
