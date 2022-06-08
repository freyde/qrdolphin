const express = require('express');
const router = express.Router();
const {
    login,
    signup,
    logout
} = require('../controllers/authController');

router.route('/').get(login).post(signup);
router.route('/logout').get(logout);

module.exports = router