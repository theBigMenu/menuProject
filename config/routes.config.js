const express = require('express');
const router = express.Router();
const secure = require("../middlewares/secure.mid");

const { misc, menus, products, auth, users, restaurants } = require('../controllers');


router.get('/', misc.home);

router.get("/restaurants/new", secure.isAuthenticated, restaurants.new);
// router.get("/restaurants", secure.isAuthenticated, restaurants.list);
router.get("/restaurants", secure.isAuthenticated, restaurants.list);
router.post("/restaurants", secure.isAuthenticated, restaurants.create);
// router.get("/restaurants/:id", secure.isAuthenticated, restaurants.detail);

router.get("/menus", secure.isAuthenticated, menus.list);
router.post("/menus", secure.isAuthenticated, menus.create);
router.get("/menus/new", secure.isAuthenticated, menus.new);
router.get("/menus/:id", secure.isAuthenticated, menus.detail);
router.post("/menus/:id/delete", secure.isAuthenticated, menus.delete);

router.get("/products", secure.isAuthenticated, products.list);
router.get("/products/new", secure.isAuthenticated, products.new);
router.get("/products/:id", secure.isAuthenticated, products.detail);
router.post("/products", secure.isAuthenticated, products.create);
router.post("/products/:id/delete", secure.isAuthenticated, products.delete);

router.get("/register", auth.register);
router.post("/register", auth.doRegister);

router.get("/login", auth.login);
router.post("/login", auth.doLogin);

router.get("/users/:id", secure.isAuthenticated, users.detail);
router.get("/users/:id/confirm", users.confirm);

module.exports = router;