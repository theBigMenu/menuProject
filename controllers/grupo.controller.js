const mongoose = require("mongoose");
const { Grupo } = require("../models");

module.exports.list = (req, res, next) => {
    Grupo.find()
    .then((grupos) => {
        res.render("products/list", { grupos });
    })
    .catch((error) => next(error));
};

module.exports.detail = (req, res, next) => {

    Grupo.findById(req.params.id)
    .then((product) => res.render("products/detail", { product }))
    .catch((error) => next(error));
};

module.exports.new = (req, res, next) => {
    res.render("products/new");
};

module.exports.create = (req, res, next) => {
const Grupo = {
    ...req.body,
    author: req.user.id,
};

Grupo.create(product)
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
    Grupo.findByIdAndDelete(req.params.id)
    .then(() => res.redirect("/products"))
    .catch((error) => next(error));
};