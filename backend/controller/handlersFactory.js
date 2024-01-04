const asyncHandler = require("express-async-handler");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ApiFeatures = require("../utils/apiFeatures");


// const setImageUrl = (doc) => {
//     if (doc.imageCover) {
//         const imageCoverUrl = `${process.env.BASE_URL}/products/${doc.imageCover}`;
//         doc.imageCover = imageCoverUrl;
//     }
//     if (doc.images) {
//         const images = [];
//         doc.images.forEach((image) => {
//             const imageUrl = `${process.env.BASE_URL}/products/${image}`;
//             images.push(imageUrl);
//         });
//         doc.images = images;
//     }
// };



exports.createOne = (Model) => asyncHandler(async (req, res) => {
    const newDoc = await Model.create(req.body);

    // if (newDoc.constructor.modelName === 'Product') {
    //     setImageUrl(newDoc);
    // }

    res.status(201).json({
        status: "success",
        data: newDoc
    });
});


exports.getAll = (Model, modelName = '') => asyncHandler(async (req, res) => {
    let filter = {};
    if (req.filterObject) {
        filter = req.filterObject;
    }

    // Build query
    // const allResults = await Model.countDocuments();
    const apiFeatures = new ApiFeatures(Model.find(filter), req.query)
        .filter()
        .search(modelName)
        .limitFields()
        .sort();

    // Apply pagination after filer and search
    const docsCount = await Model.countDocuments(apiFeatures.mongooseQuery);
    apiFeatures.paginate(docsCount);

    // Execute query
    const { mongooseQuery, paginationResult } = apiFeatures;
    const documents = await mongooseQuery;

    // Set Images url
    // if (Model.collection.collectionName === 'products') {
    //     documents.forEach((doc) => setImageUrl(doc));
    // }

    res.status(200).json({
        status: "success",
        results: docsCount,
        paginationResult,
        data: documents
    });
});


exports.getOne = (Model, populateOpts) => asyncHandler(async (req, res, next) => {
    const { id } = req.params;

    // Build query
    let query = Model.findById(id);
    if (populateOpts) query = query.populate(populateOpts);

    // Execute query
    const document = await query;

    if (!document) {
        return next(new ErrorHandler(`No document for this id ${id}`, 404));
    }

    // if (document.constructor.modelName === 'Product') {
    //     setImageUrl(document);
    // }

    res.status(200).json({
        status: "success",
        data: document
    });
});


exports.updateOne = (Model) => asyncHandler(async (req, res, next) => {
    const document = await Model.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    });

    if (!document) {
        return next(new ErrorHandler(`No document found for this id: ${req.params.id}`, 404));
    }

    // To trigger 'save' event when update document
    // const doc = await document.save();

    // if (doc.constructor.modelName === 'Product') {
    //     setImageUrl(doc);
    // }

    // document.save();
    res.status(200).json({
        status: "success",
        data: document
    });
});


exports.deleteOne = (Model) => asyncHandler(async (req, res, next) => {
    const document = await Model.findByIdAndDelete(req.params.id);

    if (!document) {
        next(new ErrorHandler(`No document found for this id: ${req.params.id}`, 404));
    }

    // To trigger 'remove' event when delete document
    document.deleteOne();

    // 204 no content
    res.status(204).send();
});