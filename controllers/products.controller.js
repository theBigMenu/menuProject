const mongoose = require("mongoose");
const { Category, Product, Menu } = require("../models");


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


  Category.find()
  .then(categories=>{
    const product = {
      category: req.params.id
  };
   res.render(('products/new'), {categories, product}) 
   })
   .catch(next) 
};



module.exports.create = (req, res, next) => {

  const producto = {
    ...req.body,
    category:req.params.id
};

Product.create(producto)
.then((product) =>{
    Category.findById(req.params.id)
    .then((category) => {
        category.products.push(product.id)
        category.save();
    })
    res.redirect(`/categories/${producto.category}`)
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
    .then(() => res.redirect("back"))
    .catch((error) => next(error));
};


 