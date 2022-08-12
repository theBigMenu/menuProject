const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const categorySchema = new Schema ({
        title: {
            type: String,
            required: "Title is required",
            maxLength: [60, "Title needs max 60 chars"],
        },

        description:{
            type: String,
            maxLength: [150, "Title needs max 150 chars"],
        },
        product: [{ type: Schema.Types.ObjectId, ref: 'Product' }],
}
)

categorySchema.pre("validate", function (next) {
    this.description = this.description || undefined;
    next();
});

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;
