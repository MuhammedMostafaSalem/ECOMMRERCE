const express = require("express");
const {
    createCategory,
    uploadCategoryImage,
    resizeImage,
    getCategories,
    getCategory,
    updateCategory,
    deleteCategory
} = require("../controller/categoryController");
const {
    createCategoryValidator,
    getCategoryValidator,
    updateCategoryValidator,
    deleteCategoryValidator
} = require("../utils/validators/categoryValidator");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");


const router = express.Router();


router.route("/categories").get(getCategories)
router.route("/category/new").post(
    isAuthenticatedUser,
    authorizeRoles("admin"),
    uploadCategoryImage,
    resizeImage,
    createCategoryValidator,
    createCategory
)
router.route("/category/:id")
    .get(
        getCategoryValidator,
        getCategory
    )
    .put(
        isAuthenticatedUser,
        authorizeRoles("admin"),
        uploadCategoryImage,
        resizeImage,
        updateCategoryValidator,
        updateCategory
    )
    .delete(
        isAuthenticatedUser,
        authorizeRoles("admin"),
        deleteCategoryValidator,
        deleteCategory
    )


module.exports = router