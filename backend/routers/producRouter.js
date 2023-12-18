const express = require('express');
const router = express.Router();
const productController = require('../controller/producController');

router.get('/product',productController.getAllProducts)

module.exports = router;