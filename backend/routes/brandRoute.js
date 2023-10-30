const express = require("express");
const {
    createBrand,
    uploadBrandImage,
    getBrands,
    getBrand,
    updateBrand,
    resizeImage,
    deleteBrand
} = require("../controller/brandController");
const {
    createBrandValidator,
    getBrandValidator,
    updateBrandValidator,
    deleteBrandValidator
} = require("../utils/validators/brandValidator");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");


const router = express.Router();


router.route("/brands").get(getBrands)
router.route("/brand/new").post(
    isAuthenticatedUser,
    authorizeRoles("admin"),
    createBrandValidator,
    uploadBrandImage,
    resizeImage,
    createBrand
)
router.route("/brand/:id")
    .get(
        getBrandValidator,
        getBrand
    )
    .put(
        isAuthenticatedUser,
        authorizeRoles("admin"),
        updateBrandValidator,
        uploadBrandImage,
        resizeImage,
        updateBrand
    )
    .delete(
        isAuthenticatedUser,
        authorizeRoles("admin"),
        deleteBrandValidator,
        deleteBrand
    )


module.exports = router