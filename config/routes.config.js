const express = require('express');
const router = express.Router();
// const { tasks, auth } = require('../controllers');
// const secure = require('../middlewares/secure.mid');
const { misc } = require('../controllers');

router.get('/', misc.home);

module.exports = router