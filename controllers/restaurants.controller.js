
const mongoose = require("mongoose");
const { Restaurant } = require("../models");
const categoriesRestaurant = require('../data/categories.restaurants.json')

module.exports.list = (req, res, next) => {
    Restaurant.find()
    .then(restaurants => {
        res.render('restaurants/list', { restaurants })
    })
    .catch(next)
}

module.exports.detail = (req, res, next) => {
    Restaurant.findById(req.params.id)
    .then((restaurant) => res.render("restaurants/detail", { restaurant }))
    .catch((error) => next(error));
};

module.exports.new = (req, res, next) => {
    res.render("restaurants/new", {categoriesRestaurant});
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
            res.render("restaurants/new", { errors: error.errors, restaurant, categoriesRestaurant });
        } else {
            next(error);
        }
    });
};

module.exports.delete = (req, res, next) => {
    Restaurant.findByIdAndDelete(req.params.id)
    .then(() => res.redirect("/restaurants"))
    .catch((error) => next(error));
};




module.exports.edit = (req, res, next) => {
    Restaurant.findById(req.params.id)
    .then((restaurant) => res.render("restaurants/edit", { restaurant, categoriesRestaurant }))
    .catch((error) => next(error));
};


module.exports.update = (req, res, next) => {
    console.log(req.body)
    Restaurant.findByIdAndUpdate(req.params.id, req.body).then((restaurant) => { 
        res.redirect("/restaurants");
    });
}
