
const mongoose = require("mongoose");
const { Menu, Restaurant } = require("../models");

module.exports.list = (req, res, next) => {
  Menu.find(req.query)
    .then(menus => {
      res.render('menus/list', { menus })
    })
    .catch(next)

}

module.exports.detail = (req, res, next) => {
  Menu.findById(req.params.id)
  .populate('categories')
  .then((menu) => res.render("menus/detail", { menu }))
  .catch((error) => next(error));
};

module.exports.new = (req, res, next) => {
  const menu = {
    restaurant: req.params.id
  };

  res.render("menus/new", {menu});
};

module.exports.create = (req, res, next) => {
  
  const menu = {
    ...req.body,
    restaurant: req.params.id
  };

  Menu.create(menu)
    .then((menu) => {
      Restaurant.findById(req.params.id)
      .then((restaurant) => {
        restaurant.menu.push(menu.id)
        restaurant.save();
      })
      res.redirect(`/restaurants/${menu.restaurant}`)
    })
    .catch((error) => {
      if (error instanceof mongoose.Error.ValidationError) {
        console.error(error);
        res.render(`menus/new`, { errors: error.errors, menu });
      } else {
        next(error);
      }
    });


};

module.exports.delete = (req, res, next) => {
  Menu.findByIdAndDelete(req.params.id)
    .then(() => res.redirect("back"))
    .catch((error) => next(error));
};


module.exports.edit = (req, res, next) => {
  Menu.findById(req.params.id)
      .then((menu) => { 
              res.render("menus/edit", { menu })
      })
      .catch((error) => next(error));
};


module.exports.update = (req, res, next) => {
  Menu.findByIdAndUpdate(req.params.id, req.body).then((menu) => { 
    const restaurant = menu.restaurant.toString()
      res.redirect(`/restaurants/${restaurant}`);
  })
  .catch((error) => next(error));
}
