const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const categoriesAllergens = require('../data/categories.allergens.json')
const AllergensPictures = require('../data/categoriesPictures.allergens.json')

const productSchema = new Schema ({
        name: {
            type: String,
            required: "Name is required",
            maxLength: [60, "Title needs at least 60 chars"],
        },
        image: {
            type: String,
            default: "https://loremflickr.com/320/240/brazil",
            validate: {
                validator: function (image) {
                try {
                    new URL(image);
                    return true;
                    } catch (error) {
                    return false;
                    }
                },
                message: (image) => `Invalid URL`,
                },
            },
        price: {
            type: Number,
        },
        description:{
            type: String,
            maxLength: [300, "Description needs at max 150 chars"],
        },
        allergens:{
            type: [{
                type: String,
                enum: categoriesAllergens
            }]
        },
        category: {
            type: Schema.Types.ObjectId,
            ref: 'Category'
        },
        allergensPictures:{
            type: [{
                type: String
            }]
        },
})


productSchema.pre("validate", function (next) {
    this.image = this.image || undefined;
    this.description = this.description || undefined;

    next();
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;