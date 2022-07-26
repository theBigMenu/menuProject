const express = require('express');
const router = express.Router();

const { misc, menus, products } = require('../controllers');


router.get('/', misc.home);

router.get("/menus", menus.list);
router.get("/menus/new", menus.new);
router.get("/menus/:id", menus.detail);
router.post("/menus", menus.create);
router.post("/menus/:id/delete", menus.delete);

router.get("/products", products.list);
router.get("/products/new", products.new);
router.get("/products/:id", products.detail);
router.post("/products", products.create);
router.post("/products/:id/delete", products.delete);


module.exports = router;