const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema(
    {
        name: {
            type: String,
            trim: true,
            // index: true,
            required: [true, 'Category required'],
            unique: [true, 'Category must be unique'],
            minlength: [3, 'Too short category name'],
            maxlength: [32, 'Too long category name'],
        },
        slug: {
            type: String,
            lowercase: true,
        },
        image: String,
    },
    { timestamps: true }
);


categorySchema.index({ name: 1 });


const setImageUrl = (doc) => {
    if (doc.image) {
        // const imageUrl = `${process.env.BASE_URL}/categories/${doc.image}`;
        const imageUrl = `https://ecommrerce.vercel.app/categories/${doc.image}`;
        doc.image = imageUrl;
    }
};

categorySchema.post('init', (doc) => {
    setImageUrl(doc);
});

categorySchema.post('save', (doc) => {
    setImageUrl(doc);
});


const Category = mongoose.model("Category", categorySchema);

module.exports = Category;