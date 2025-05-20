const express = require("express");
const {
  registerUser,
  loginUser,
  verifyOtp,
  resendOtp,
  dashboard,
} = require("../controllers/userControllers");
const authMiddleware = require("../middlewares/auth");
const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/verify-otp", verifyOtp);
router.post("/resend-otp", resendOtp);
router.get("/dashboard", authMiddleware, dashboard);

module.exports = router;
