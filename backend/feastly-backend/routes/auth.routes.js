const router = require("express").Router();
const { register, login, getProfile, updateProfile } = require("../controllers/auth.controller");
const { protect } = require("../middleware/auth");
const validate = require("../middleware/validate");
const { registerRules, loginRules } = require("../validators/auth.validator");

router.post("/register", validate(registerRules), register);
router.post("/login", validate(loginRules), login);
router.get("/profile", protect, getProfile);
router.put("/profile", protect, updateProfile);

module.exports = router;
