const express = require('express');
const router = express.Router();
const noteController = require('../controllers/noteController');
const paginationMiddleware = require('../middlewares/pagination');

// Send a note to one or multiple users with a specific type
router.post('/', noteController.sendNote);

// List the user's timeline notes in the last 30 days with non-disabled types
router.get('/', paginationMiddleware, noteController.listTimelineNotes);

// Soft delete one or more of the user's received notes
router.delete('/', noteController.deleteNotes);

module.exports = router;