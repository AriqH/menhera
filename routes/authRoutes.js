const express = require('express');
const { register, login, logout, verifyToken } = require('../controllers/authController');
const { getProfile } = require('../controllers/authController');

const router = express.Router();

router.post('/register', register);
router.post('/login', login);  // Login without token verification
router.post('/logout', verifyToken, logout);  // Logout with token verification
router.get('/profile', verifyToken, getProfile);

module.exports = router;

