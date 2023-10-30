const sharp = require("sharp");
const {v4: uuidv4} = require("uuid");
const Category = require("../model/categoryModel");
const { uploadSingleImage } = require("../middleware/imageUpload");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const factory = require("./handlersFactory");
const asyncHandler = require('express-async-handler');


exports.uploadCategoryImage = uploadSingleImage('image');

// Resize image
exports.resizeImage = asyncHandler(async (req, res, next) => {
    if (!req.file) return next();

    const ext = req.file.mimetype.split('/')[1];
    const filename = `category-${uuidv4()}-${Date.now()}.${ext}`;

    await sharp(req.file.buffer).toFile(`uploads/categories/${filename}`);

    req.body.image = filename;
    next();
});


// Create Category -- Admin

// exports.createCategory = catchAsyncErrors(async(req, res) => {
//     const category = await Category.create(req.body);

//     res.status(201).json({
//         status: "success",
//         category
//     })
// });
exports.createCategory = factory.createOne(Category);

// Get All Categories
exports.getCategories = factory.getAll(Category);

// Get One Category
exports.getCategory = factory.getOne(Category);

// Update Category -- Admin
exports.updateCategory = factory.updateOne(Category);

// Delete Category -- Admin
exports.deleteCategory = factory.deleteOne(Category);