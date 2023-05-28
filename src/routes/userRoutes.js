const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Notify users with their latest notes stats
router.post('/notify', userController.notifyUsers);

module.exports = router;