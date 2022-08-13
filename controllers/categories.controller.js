const mongoose = require("mongoose");
const { Menu, Category } = require("../models");



module.exports.new = (req, res, next) => {
    const category = {
        menu: req.params.id
    };
    
    res.render("categories/new", {category});
};


module.exports.list = (req, res, next) => {
    Category.find({user:req.user.id})
    .then(categories => {
        res.render('categories/list', { categories })
    })
    .catch(next)
}

module.exports.detail = (req, res, next) => {
    Category.findById(req.params.id)
    .populate('menu')
    .then((categories) => {
        res.render("categories/detail", { categories })
    }
        )
    .catch((error) => next(error));
};


module.exports.create = (req, res, next) => {

    const category = {
        ...req.body,
        menu:req.params.id
    };

    console.log(req.params.id)

Category.create(category)
    .then((category) =>{
        Category.findById(req.params.id).then((menu) => {
            menu.categories.push(category.id)
            menu.save();
        })
        res.redirect("/categories")
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
    .then(() => res.redirect("/categories"))
    .catch((error) => next(error));
};




module.exports.edit = (req, res, next) => {
    Category.findById(req.params.id)
        .then((categories) => { 
            if(category.user.toString() === req.user.id)
                res.render("categories/edit", { categories })
            else 
                res.redirect("/");
        })
        .catch((error) => next(error));
};


module.exports.update = (req, res, next) => {
    Category.findByIdAndUpdate(req.params.id, req.body).then((categories) => { 
        res.redirect("/categories");
    });
}
