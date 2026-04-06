const router = require("express").Router();
const { placeOrder, getMyOrders, getOrderById, getAllOrders, updateOrderStatus } = require("../controllers/order.controller");
const { protect, adminOnly } = require("../middleware/auth");
const validate = require("../middleware/validate");
const { placeOrderRules, updateStatusRules } = require("../validators/order.validator");

router.use(protect);
router.post("/", validate(placeOrderRules), placeOrder);
router.get("/my", getMyOrders);
router.get("/:id", getOrderById);

// Admin
router.get("/", adminOnly, getAllOrders);
router.put("/:id/status", adminOnly, validate(updateStatusRules), updateOrderStatus);

module.exports = router;
