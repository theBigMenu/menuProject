const express = require('express');
const router = express.Router();
const secure = require("../middlewares/secure.mid");
const upload = require("./multer.config");


const { misc, menus, products, auth, users, restaurants, categories} = require('../controllers');


router.get('/', misc.home);
router.get('/contacts', misc.contacts);

router.get("/restaurants", secure.isAuthenticated, restaurants.list);
router.get("/restaurants/new", secure.isAuthenticated, restaurants.new);
router.get("/restaurants/:id", secure.isAuthenticated, restaurants.detail);
router.post("/restaurants", secure.isAuthenticated, upload.single('logo'), restaurants.create);
router.get('/restaurants/:id/edit',secure.isAuthenticated, restaurants.edit);
router.post('/restaurants/:id/edit',secure.isAuthenticated, upload.single('logo'), restaurants.update);
router.post("/restaurants/:id/delete", secure.isAuthenticated, restaurants.delete);

router.get("/menus", secure.isAuthenticated, menus.list);
router.get("/menus/:id", secure.isAuthenticated, menus.detail);
router.get("/menus/:id/new", secure.isAuthenticated, menus.new);
router.post("/menus/:id/create", secure.isAuthenticated, menus.create);
router.get('/menus/:id/edit',secure.isAuthenticated, menus.edit);
router.post('/menus/:id/edit',secure.isAuthenticated, menus.update);
router.post("/menus/:id/delete", secure.isAuthenticated, menus.delete);

router.get("/categories", secure.isAuthenticated, categories.list);
router.get("/categories/:id", secure.isAuthenticated, categories.detail);
router.get("/categories/:id/new", secure.isAuthenticated, categories.new);
router.post("/categories/:id/create", secure.isAuthenticated, categories.create);
router.get('/categories/:id/edit',secure.isAuthenticated, categories.edit);
router.post('/categories/:id/edit',secure.isAuthenticated, categories.update);
router.post("/categories/:id/delete", secure.isAuthenticated, categories.delete);

// router.get("/grupo", secure.isAuthenticated, grupo.list);
// router.get("/grupo/:id/new", secure.isAuthenticated, menus.new);
// router.post("/grupo/:id/create", secure.isAuthenticated, menus.create);
// router.post("/grupo/:id/delete", secure.isAuthenticated, menus.delete);


router.get("/products", secure.isAuthenticated, products.list);
router.get("/products/:id", secure.isAuthenticated, products.detail);
router.get("/products/:id/new", secure.isAuthenticated, products.new);
router.post("/products/:id/create", secure.isAuthenticated, products.create);
router.get('/products/:id/edit',secure.isAuthenticated, products.edit);
router.post('/products/:id/edit',secure.isAuthenticated, products.update);
router.post("/products/:id/delete", secure.isAuthenticated, products.delete);

router.get("/register", auth.register);
router.post("/register", auth.doRegister);

router.get("/login", auth.login);
router.post("/login", auth.doLogin);
router.get("/logout", auth.logout)

router.get("/users/:id", secure.isAuthenticated, users.detail);
router.get("/users/:id/confirm", users.confirm);
router.get('/users/:id/edit',secure.isAuthenticated, users.edit);
router.post('/users/:id/edit',secure.isAuthenticated, users.update);

module.exports = router;