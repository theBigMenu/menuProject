const mongoose = require("mongoose");
const { Category, Product } = require("../models");


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
  const product = {
      category: req.params.id
  };
  res.render("products/new", {product});
};



module.exports.create = (req, res, next) => {

  const product = {
    ...req.body,
    category:req.params.id
};

Product.create(product)
.then((product) =>{
    Category.findById(req.params.id)
    .then((category) => {
        category.products.push(product.id)
        category.save();
    })
    res.redirect(`/categories/${product.category}`)
})
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


 //Category.find()
  // .then(categories=>{
  //  res.render('products/new'), {categories}) 
  // })
  // .catch(next) t cambiar el create de abajo a un do create
