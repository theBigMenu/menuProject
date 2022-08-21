const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const categoriesRestaurant = require('../data/categories.restaurants.json')
const servicesRestaurant = require('../data/services.restaurants.json')

const restaurantSchema = new Schema ({
        name: {
            type: String,
            required: "Title is required",
            maxLength: [120, "Name needs at max 60 chars"],
            required: true,
        },
        category: {
            type: [{
                type: String,
                enum: categoriesRestaurant,
                required: true,
            }]
        },
        logo: {
            type: String,
            default: "https://loremflickr.com/320/240/food",
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
        /*schedule: [{
            "schedule_begin": {
                type: Date,
                required: true,
            },
            "schedule_end":{
                type: Date,
                required: true,
            },
            "schedule_days_runs": {
                type: Number,
                min: 0,
                max: 6,
                required: true,
            },
        }],*/
        phoneNumber: {
            type: Number
        },
        delivery: { 
            type: Boolean,
            default: false
        },        
        address:{
                type: String,
                maxLength: [500, "Address needs at max 500 chars"],
        },
        description:{
            type: String,
            maxLength: [300, "Description needs at max 300 chars"],
            required: true
        },
        user: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
        menu: [{
            type: Schema.Types.ObjectId,
            ref: 'Menu',
            required: true
        }],
        services: {
            type: [{
                type: String,
                enum: servicesRestaurant,
                required: true,
            }]
        },  
},
{timestamps: true}
)

restaurantSchema.pre("validate", function (next) {
    this.logo = this.logo || undefined;
    this.description = this.description || undefined;
    next();
});

const Restaurant = mongoose.model("Restaurant", restaurantSchema);

module.exports = Restaurant;