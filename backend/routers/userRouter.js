const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');

router.post('/daftar', userController.daftaruser)
router.post('/login',userController.loginUser)

module.exports = router;