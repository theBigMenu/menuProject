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
        product: [{
            type: Schema.Types.ObjectId,
            ref: 'Product'
        }],
        menu: {
            type: Schema.Types.ObjectId,
            ref: 'Menu'
        },
}
)

categorySchema.pre("validate", function (next) {
    this.description = this.description || undefined;
    next();
});

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;
