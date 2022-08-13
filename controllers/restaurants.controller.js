
const mongoose = require("mongoose");
const { Restaurant, User } = require("../models");
const categoriesRestaurant = require('../data/categories.restaurants.json')

module.exports.list = (req, res, next) => {
    Restaurant.find({user:req.user.id})
    .then(restaurants => {
        res.render('restaurants/list', { restaurants })
    })
    .catch(next)
}

module.exports.detail = (req, res, next) => {
    Restaurant.findById(req.params.id)
    .populate('menu')
    .then((restaurant) => {
        console.log(restaurant)
        res.render("restaurants/detail", { restaurant })
    }
        )
    .catch((error) => next(error));
};

module.exports.new = (req, res, next) => {
    res.render("restaurants/new", {categoriesRestaurant});
};

module.exports.create = (req, res, next) => {
    const restaurant = {
        ...req.body,
        user:req.user.id
    };

Restaurant.create(restaurant)

    .then((restaurant) =>{
        User.findById(req.user.id).then((user) => {
            user.restaurant.push(restaurant.id)
            user.save();
        })
        res.redirect("/restaurants")
    })
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
        .then((restaurant) => { 
            console.log(restaurant.user === req.user.id,restaurant.user, req.user.id)
            if(restaurant.user.toString() === req.user.id)
                res.render("restaurants/edit", { restaurant, categoriesRestaurant })
            else 
                res.redirect("/");
        })
        .catch((error) => next(error));
};


module.exports.update = (req, res, next) => {
    console.log(req.body)
    Restaurant.findByIdAndUpdate(req.params.id, req.body).then((restaurant) => { 
        res.redirect("/restaurants");
    });
}
