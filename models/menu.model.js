const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const menuSchema = new Schema ({
        title: {
            type: String,
            required: "Title is required",
            maxLength: [60, "Title needs at least 60 chars"],
        },
        logo: {
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
        background: {
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
        description:{
            type: String,
            maxLength: [150, "Title needs at least 150 chars"],
        }
})

menuSchema.pre("validate", function (next) {
    this.image = this.image || undefined;
    this.description = this.description || undefined;
    next();
  });
  
  const Menu = mongoose.model("Menu", menuSchema);

  module.exports = Menu;
  