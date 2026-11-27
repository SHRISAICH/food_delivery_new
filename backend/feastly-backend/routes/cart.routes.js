const router = require("express").Router();
const { getCart, addToCart, updateCartItem, removeFromCart, clearCart } = require("../controllers/cart.controller");
const { protect } = require("../middleware/auth");
const validate = require("../middleware/validate");
const { addToCartRules, updateCartItemRules } = require("../validators/cart.validator");

router.use(protect);
router.get("/", getCart);
router.post("/", validate(addToCartRules), addToCart);
router.put("/:itemId", validate(updateCartItemRules), updateCartItem);
router.delete("/:itemId", removeFromCart);
router.delete("/", clearCart);

module.exports = router;
