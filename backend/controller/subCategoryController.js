const SubCategory = require("../model/subCategoryModel");
const factory = require("./handlersFactory");

// Middleware to Set CategoryId to body before creating subcategory (create subcategory for category)
exports.setCategoryIdBody = (req, res, next) => {
    if (!req.body.category) req.body.category = req.params.categoryId;
    next();
};

// Middleware to create filterObject for get subcategories In category
exports.createFilterObj = (req, res, next) => {
    let filter = {};
    if (req.params.categoryId) filter = { category: req.params.categoryId };
    req.filterObject = filter;
    next();
};



// Create SubCategory
exports.createSubCategory = factory.createOne(SubCategory);

// Get all subcategory
exports.getSubCategories = factory.getAll(SubCategory);

// Get One subcategory
exports.getOneSubcategory = factory.getOne(SubCategory);

// Update subcategory
exports.updateSubCategory = factory.updateOne(SubCategory);

// Delete subcategory
exports.deleteSubCategory = factory.deleteOne(SubCategory);