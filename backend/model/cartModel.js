const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema(
    {
        products: [
            {
                product: {
                    type: mongoose.Schema.ObjectId,
                    ref: "Product"
                },
                count: Number,
                color: String,
                price: Number,
            },
        ],
        totalCartPrice: Number,
        cartOwner: {
            type: mongoose.Schema.ObjectId,
            ref: 'User',
        },
    },
    { timestamps: true }
);


module.exports = mongoose.model('Cart', cartSchema);