const express = require("express");
const {
    getAllProducts,
    createProduct,
    updateProduct,
    deleteProduct,
    getProductDetails,
    uploadProductImages, resizeProductImages } = require("../controller/productController");
const {
    createProductValidator,
    getProductValidator,
    updateProductValidator,
    deleteProductValidator
} = require("../utils/validators/productValidator");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

const router = express.Router();


router.route("/products").get(getAllProducts);
router.route("/product/new").post(
    isAuthenticatedUser,
    authorizeRoles("admin"),
    uploadProductImages,
    resizeProductImages,
    createProductValidator,
    createProduct);
router.route("/product/:id")
    .get(getProductValidator, getProductDetails)
    .put(
        isAuthenticatedUser,
        authorizeRoles("admin"),
        uploadProductImages,
        resizeProductImages,
        updateProductValidator,
        updateProduct
    )
    .delete(
        isAuthenticatedUser,
        authorizeRoles("admin"),
        deleteProductValidator,
        deleteProduct
    );


module.exports = router