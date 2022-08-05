
const mongoose = require("mongoose");
const { Menu } = require("../models");

module.exports.list = (req, res, next) => {
  Menu.find()
    .then(menus => {
      res.render('menus/list', { menus })
    })
    .catch(next)
}

module.exports.detail = (req, res, next) => {
  Menu.findById(req.params.id)
    .then((menu) => res.render("menus/detail", { menu }))
    .catch((error) => next(error));
};

module.exports.new = (req, res, next) => {
  res.render("menus/new");
};

module.exports.create = (req, res, next) => {
  const menu = {
    ...req.body,
  };

  Menu.create(menu)
    .then((menu) => res.redirect("/menus"))
    .catch((error) => {
      if (error instanceof mongoose.Error.ValidationError) {
        console.error(error);
        res.render("menus/new", { errors: error.errors, menu });
      } else {
        next(error);
      }
    });
};

module.exports.delete = (req, res, next) => {
  Menu.findByIdAndDelete(req.params.id)
    .then(() => res.redirect("/menus"))
    .catch((error) => next(error));
};
