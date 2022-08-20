const { User, Restaurant } = require("../models");

module.exports.detail = (req, res, next) => {
  User.findById(req.params.id)
    .then((user) => {
      if (user) {
        Restaurant.find({user: `${req.params.id}`})
          .then((restaurant) => {
            console.log(restaurant)
            res.render("users/detail", { user, restaurant });
          })
      } else {
        res.redirect("/");
      }
    })
    .catch((err) => next(err));
};

module.exports.confirm = (req, res, next) => {
  User.findByIdAndUpdate(req.params.id, { confirmed: true })
    .then(() => {
      res.redirect("/login");
    })
    .catch((err) => next(err));
};

module.exports.edit = (req, res, next) => {

  User.findById(req.params.id)
      .then((user) => { 
              res.render("users/edit", { user })
      })
      .catch((error) => next(error));
};


module.exports.update = (req, res, next) => {
  User.findByIdAndUpdate(req.params.id, req.body).then((user) => { 
      res.redirect("/");
  });
}
