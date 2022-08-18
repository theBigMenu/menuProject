const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const categorySchema = new Schema ({
    name: {
        type: String,
        required: "Name is required",
        maxLength: [60, "Name needs max 60 chars"],
    },
    description:{
        type: String,
        maxLength: [150, "Description needs max 150 chars"],
    },
    menu: {
        type: Schema.Types.ObjectId,
        ref: 'Menu'
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
    products: [{
            type: Schema.Types.ObjectId,
            ref: 'Product'
        }],
},
{timestamps: true}
)

categorySchema.pre("validate", function (next) {
    this.image = this.image || undefined;
    this.description = this.description || undefined;
    next();
});

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;
