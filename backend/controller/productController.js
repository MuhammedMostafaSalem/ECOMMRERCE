const sharp = require('sharp');
const { v4: uuidv4 } = require('uuid');
const asyncHandler = require('express-async-handler');
const multer = require('multer');
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const Product = require("../model/productModel");
const ErrorHandler = require("../utils/errorHandler");
const factory = require("./handlersFactory");


// Storage
const multerStorage = multer.memoryStorage();

// Accept only images
const multerFilter = (req, file, cb) => {
    if (file.mimetype.startsWith('image')) {
        cb(null, true);
    } else {
        cb(new ErrorHandler('only images allowed', 400), false);
    }
};

const upload = multer({ storage: multerStorage, fileFilter: multerFilter });

exports.uploadProductImages = upload.fields([
    { name: 'imageCover', maxCount: 1 },
    { name: 'images', maxCount: 5 },
]);

exports.resizeProductImages = asyncHandler(async (req, res, next) => {
    // console.log(req.files);
    // 1) Image Process for imageCover
    if (req.files.imageCover) {
        const ext = req.files.imageCover[0].mimetype.split('/')[1];
        const imageCoverFilename = `products-${uuidv4()}-${Date.now()}-cover.${ext}`;

        await sharp(req.files.imageCover[0].buffer)
            .toFile(`uploads/products/${imageCoverFilename}`); // write into a file on the disk

        // Save imageCover into database
        req.body.imageCover = imageCoverFilename;
    }

    req.body.images = [];

    // 2- Image processing for images
    if (req.files.images) {
        await Promise.all(
            req.files.images.map(async (img, index) => {
                const ext = img.mimetype.split('/')[1];
                const filename = `products-${uuidv4()}-${Date.now()}-${
                    index + 1
                }.${ext}`;
                await sharp(img.buffer)
                    .toFile(`uploads/products/${filename}`);

                // Save images into database
                req.body.images.push(filename);
            })
        );
    }

    next();
});








// Create Product -- Admin
exports.createProduct = factory.createOne(Product);

// Get All Products
exports.getAllProducts = factory.getAll(Product, 'Products');

// Get Product Details
exports.getProductDetails = factory.getOne(Product, 'reviews');

// Update Product -- Admin
exports.updateProduct = factory.updateOne(Product);

// Delete Product -- Admin
exports.deleteProduct = factory.deleteOne(Product);