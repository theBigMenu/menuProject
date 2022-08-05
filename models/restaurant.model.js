const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const restaurantSchema = new Schema ({
        name: {
            type: String,
            required: "Title is required",
            maxLength: [60, "Title needs at least 60 chars"],
            required: true,
        },
        category: { 
            type: String,
            required: true,
            enum: ['Restaurant', 'Fast Food', 'Buffet', 'Coffee/Bar'],
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
        phoneNumber: {
            type: Number,
            required: true,
        },
        delivery: { 
            type: Boolean,
            default: false,
            validate: {
                validator: function (boolean) {
                try {
                    if (boolean === true){
                        return true;
                    }   
                    } catch (error) {
                    return false;
                    }
                },
                message: (image) => `Invalid URL`,
                },
            required: true,
        },        
        address:{
                type: String,
                maxLength: [100, "The info of the last order needs at max 100 chars"],
        },
        description:{
            type: String,
            maxLength: [100, "Description needs at max 100 chars"],
        },
})

restaurantSchema.pre("validate", function (next) {
    this.logo = this.logo || undefined;
    this.description = this.description || undefined;
    next();
});

const Restaurant = mongoose.model("Restaurant", restaurantSchema);

module.exports = Restaurant;