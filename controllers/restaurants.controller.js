
const mongoose = require("mongoose");
const { Restaurant, User } = require("../models");
const categoriesRestaurant = require('../data/categories.restaurants.json')
const servicesRestaurant = require('../data/services.restaurants.json')

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
        res.render("restaurants/detail", { restaurant })
    }
        )
    .catch((error) => next(error));
};

module.exports.new = (req, res, next) => {
    res.render("restaurants/new", {categoriesRestaurant, servicesRestaurant});
};

module.exports.create = (req, res, next) => {

    
    const restaurant = {
        ...req.body,
        user:req.user.id,
    };

    if(req.file){
        restaurant.logo = req.file.path
        restaurant.save()
    } 

Restaurant.create(restaurant)

    .then((restaurant) =>{

        User.findById(req.user.id)

        .then((user) => {
            if (user) {
                user.restaurant.push(restaurant.id)
                user.save();
            }
            else throw mongoose.Error.ValidationError
        })
        res.redirect("/restaurants")
    })
    .catch((error) => {
        if (error instanceof mongoose.Error.ValidationError) {
            console.error(error);
            res.render("restaurants/new", { errors: error.errors, restaurant, categoriesRestaurant, servicesRestaurant });
        } else {
            next(error);
        }
    });
};

module.exports.delete = (req, res, next) => {
    Restaurant.findByIdAndDelete(req.params.id)
    .then(() => res.redirect("back"))
    .catch((error) => next(error));
};




module.exports.edit = (req, res, next) => {

    Restaurant.findById(req.params.id)
        .then((restaurant) => { 
            if(restaurant.user.toString() === req.user.id){
                res.render("restaurants/edit", { restaurant, categoriesRestaurant, servicesRestaurant })
            } else {
                res.redirect("/");
            }
        })
        .catch((error) => next(error));
};


module.exports.update = (req, res, next) => {

    Restaurant.findByIdAndUpdate(req.params.id, req.body)
    .then((restaurant) => { 
        if(req.file){
            restaurant.logo = req.file.path
            restaurant.save()
            res.redirect(`/restaurants/${req.params.id}`);
        } else {
            res.redirect(`/restaurants/${req.params.id}`);
        }
    });
}
