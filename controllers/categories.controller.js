const mongoose = require("mongoose");
const { Menu, Category } = require("../models");


module.exports.list = (req, res, next) => {
    Category.find()
      .then(categories => {
        res.render('categories/list', { categories })
      })
      .catch(next)

  }

  module.exports.detail = (req, res, next) => {
    Category.findById(req.params.id)
    .populate('products')
    .then((categories) => res.render("categories/detail", { categories }))
    .catch((error) => next(error));
  };

  module.exports.new = (req, res, next) => {
    const category = {
      menu: req.params.id
    };
  
    res.render("categories/new", {category});
  };

module.exports.create = (req, res, next) => {

    const category = {
        ...req.body,
        menu:req.params.id
    };

Category.create(category)
    .then((category) =>{
        Menu.findById(req.params.id)
        .then((menu) => {
            menu.categories.push(category.id)
            menu.save();
        })
        res.redirect(`/menus/${category.menu}`)
    })
    .catch((error) => {
        if (error instanceof mongoose.Error.ValidationError) {
            console.error(error);
            res.render("categories/new", { errors: error.errors, category });
        } else {
            next(error);
        }
    });
};

module.exports.delete = (req, res, next) => {
    Category.findByIdAndDelete(req.params.id)
    .then(() => res.redirect("back"))
    .catch((error) => next(error));
};




module.exports.edit = (req, res, next) => {
    Category.findById(req.params.id)
        .then((category) => { 
                res.render("categories/edit", { category })
        })
        .catch((error) => next(error));
  };


  module.exports.update = (req, res, next) => {
    Category.findByIdAndUpdate(req.params.id, req.body).then((category) => { 
      const menu = category.menu.toString()
        res.redirect(`/menus/${menu}`);
    })
    .catch((error) => next(error));
  }
  