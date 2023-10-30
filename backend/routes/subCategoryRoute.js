const express = require("express");
const {
    createSubCategory,
    setCategoryIdBody,
    getSubCategories,
    createFilterObj,
    getOneSubcategory,
    updateSubCategory,
    deleteSubCategory
} = require("../controller/subCategoryController");
const {
    createSubCategoryValidator,
    getSubCategoryValidator,
    updateSubCategoryValidator,
    deleteSubCategoryValidator
} = require("../utils/validators/subCategoryValidator");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

// mergeParams: allow us to access parameters on other routers
// ex: we access categoryId from category router
const router = express.Router({ mergeParams: true });


router.route('/subcategories')
    .get(createFilterObj, getSubCategories)
    .post(
        isAuthenticatedUser,
        authorizeRoles("admin"),
        createSubCategoryValidator,
        setCategoryIdBody,
        createSubCategory
    );


router.route('/subcategory/:id')
    .get(getSubCategoryValidator, getOneSubcategory)
    .put(
        isAuthenticatedUser,
        authorizeRoles("admin"),
        updateSubCategoryValidator,
        updateSubCategory
    )
    .delete(
        isAuthenticatedUser,
        authorizeRoles("admin"),
        deleteSubCategoryValidator,
        deleteSubCategory
    );

module.exports = router;