const express = require("express");
const {
    registerUser,
    loginUser,
    logout,
    forgotPassword,
    resetPassword,
    uploadUserImage,
    resizeImage
} = require("../controller/authController");
const router = express.Router();


router.route("/register").post(
    uploadUserImage,
    resizeImage,
    registerUser
);
router.route("/login").post(loginUser);
router.route("/password/forgot").post(forgotPassword);
router.route("/logout").get(logout);
router.route("/password/reset/:token").put(resetPassword);

module.exports = router;