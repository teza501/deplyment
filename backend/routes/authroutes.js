const express = require('express');
const { signup, signin, logout, userProfile } = require('../controllers/authcontroller');
const { isAuthenticated } = require('../middleware/auth');
const router = express.Router();


//auth routes
router.post('/signup',signup)
router.post('/signin',signin)
router.get('/logout',logout)
router.get('/me', isAuthenticated, userProfile);


module.exports = router;