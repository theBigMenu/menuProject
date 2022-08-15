const express = require('express');
const router = express.Router();
const secure = require("../middlewares/secure.mid");

const { misc, menus, products, auth, users, restaurants, categories, grupo } = require('../controllers');


router.get('/', misc.home);

router.get("/restaurants/new", secure.isAuthenticated, restaurants.new);
router.get("/restaurants", secure.isAuthenticated, restaurants.list);
router.post("/restaurants", secure.isAuthenticated, restaurants.create);
router.get("/restaurants/:id", secure.isAuthenticated, restaurants.detail);
router.post("/restaurants/:id/delete", secure.isAuthenticated, restaurants.delete);
router.get('/restaurants/:id/edit',secure.isAuthenticated, restaurants.edit);
router.post('/restaurants/:id/edit',secure.isAuthenticated, restaurants.update);

router.get("/menus", secure.isAuthenticated, menus.list);
router.get("/menus/:id/new", secure.isAuthenticated, menus.new);
router.post("/menus/:id/create", secure.isAuthenticated, menus.create);
router.get("/menus/:id", secure.isAuthenticated, menus.detail);
router.post("/menus/:id/delete", secure.isAuthenticated, menus.delete);
// router.post('/menus/:id/edit',secure.isAuthenticated, menus.update);

router.get("/categories", secure.isAuthenticated, categories.list);
router.get("/categories/:id/new", secure.isAuthenticated, categories.new);
router.post("/categories/:id/create", secure.isAuthenticated, categories.create);
router.get("/categories/:id", secure.isAuthenticated, categories.detail); t
// router.post("/categories/:id/delete", secure.isAuthenticated, categories.delete);
// router.get('/categories/:id/edit',secure.isAuthenticated, categories.edit);
// router.post('/categories/:id/edit',secure.isAuthenticated, categories.update);

// router.get("/grupo", secure.isAuthenticated, grupo.list);
// router.get("/grupo/:id/new", secure.isAuthenticated, menus.new);
// router.post("/grupo/:id/create", secure.isAuthenticated, menus.create);
// router.post("/grupo/:id/delete", secure.isAuthenticated, menus.delete);


router.get("/products", secure.isAuthenticated, products.list);
router.get("/products/:id/new", secure.isAuthenticated, products.new);
router.post("/products/:id/create", secure.isAuthenticated, products.create);
router.get("/products/:id", secure.isAuthenticated, products.detail);
router.post("/products/:id/delete", secure.isAuthenticated, products.delete);
// router.post('/products/:id/edit',secure.isAuthenticated, products.update);


router.get("/register", auth.register);
router.post("/register", auth.doRegister);

router.get("/login", auth.login);
router.post("/login", auth.doLogin);

router.get("/users/:id", secure.isAuthenticated, users.detail);
router.get("/users/:id/confirm", users.confirm);

module.exports = router;