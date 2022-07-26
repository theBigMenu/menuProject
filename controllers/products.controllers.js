const mongoose = require("mongoose");
const { Product } = require("../models");

module.exports.list = (req, res, next) => {
  Product.find()
    .then((products) => {
      res.render("products/list", { products });
    })
    .catch((error) => next(error));
};

module.exports.detail = (req, res, next) => {

    Product.findById(req.params.id)
    .then((product) => res.render("products/detail", { product }))
    .catch((error) => next(error));
};

module.exports.new = (req, res, next) => {
  res.render("products/new");
};

module.exports.create = (req, res, next) => {
  const product = {
    ...req.body,
    author: req.user.id,
  };

  Product.create(product)
    .then((product) => res.redirect("/products"))
    .catch((error) => {
      if (error instanceof mongoose.Error.ValidationError) {
        console.error(error);
        res.render("products/new", { errors: error.errors, product });
      } else {
        next(error);
      }
    });
};

module.exports.delete = (req, res, next) => {
    Product.findByIdAndDelete(req.params.id)
    .then(() => res.redirect("/products"))
    .catch((error) => next(error));
};