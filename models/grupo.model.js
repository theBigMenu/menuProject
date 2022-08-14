const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const grupoSchema = new Schema ({
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
        product: [{
            type: Schema.Types.ObjectId,
            ref: 'Category'
        }],
})

grupoSchema.pre("validate", function (next) {
    this.image = this.image || undefined;
    this.description = this.description || undefined;
    next();
});

const Grupo = mongoose.model("Grupo", grupoSchema);

module.exports = Grupo;