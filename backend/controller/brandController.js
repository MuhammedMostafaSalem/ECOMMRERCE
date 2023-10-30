const sharp = require('sharp');
const { v4: uuidv4 } = require('uuid');
const asyncHandler = require('express-async-handler');
const Brand = require('../model/brandModel');
const { uploadSingleImage } = require('../middleware/imageUpload');
const factory = require('./handlersFactory');

exports.uploadBrandImage = uploadSingleImage('image');

// Resize image
exports.resizeImage = asyncHandler(async (req, res, next) => {
    if (!req.file) return next();

    const ext = req.file.mimetype.split('/')[1];
    const filename = `brand-${uuidv4()}-${Date.now()}.${ext}`;

    await sharp(req.file.buffer)
      .toFile(`uploads/brands/${filename}`); // write into a file on the disk
    console.log(filename);
    req.body.image = filename;
    next();
});



// Create brand
exports.createBrand = factory.createOne(Brand);

// Get all brands
exports.getBrands = factory.getAll(Brand);

// Get One brand by id
exports.getBrand = factory.getOne(Brand);

// Update brand
exports.updateBrand = factory.updateOne(Brand);

// Delete brand
exports.deleteBrand = factory.deleteOne(Brand)