const express = require("express");
const {
    getUserDetails,
    updatePassword,
    updateProfile,
    getAllUser,
    getSingleUser,
    updateUserRole, deleteUser
} = require("../controller/userController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");
const router = express.Router();


// logged user
router.route("/users/getMe").get(isAuthenticatedUser, getUserDetails);
router.route("/users/changeMyPassword").put(isAuthenticatedUser, updatePassword);
router.route("/users/updateMe").put(isAuthenticatedUser, updateProfile);


// users (admin)
router.route("/admin/users").get(isAuthenticatedUser, authorizeRoles("admin"), getAllUser);
router.route("/admin/user/:id")
    .get(isAuthenticatedUser, authorizeRoles("admin"), getSingleUser)
    .put(isAuthenticatedUser, authorizeRoles("admin"), updateUserRole)
    .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteUser);


module.exports = router;