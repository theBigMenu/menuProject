
const mongoose = require("mongoose");
const { Restaurant } = require("../models");

module.exports.list = (req, res, next) => {
    Restaurant.find()
    .then(restaurants => {
        res.render('restaurants/list', { restaurants })
    })
    .catch(next)
}

module.exports.new = (req, res, next) => {
    res.render("restaurants/new");
};

module.exports.create = (req, res, next) => {
    const restaurant = {
        ...req.body,
    };

    Restaurant.create(restaurant)
        .then((restaurant) => res.redirect("/restaurants"))
        .catch((error) => {
        if (error instanceof mongoose.Error.ValidationError) {
            console.error(error);
            res.render("restaurants/new", { errors: error.errors, restaurant });
        } else {
            next(error);
        }
        });
};