const router = require("express").Router();
const { createPayment, verifyPayment } = require("../controllers/payment.controller");
const { protect } = require("../middleware/auth");

router.use(protect);
router.post("/create", createPayment);
router.post("/verify", verifyPayment);

module.exports = router;
