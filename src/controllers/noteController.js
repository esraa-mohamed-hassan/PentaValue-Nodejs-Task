const { Op } = require('sequelize');
const Note = require('../models/Note');
const User = require('../models/User');

// Send a note to one or multiple users with a specific type
exports.sendNote = async(req, res) => {
    try {
        // Extract the necessary information from the request
        const { userIds, type, title, message, mediaFiles } = req.body;

        // Create a new note
        const note = await Note.create({
            title,
            message,
            type,
            mediaFiles,
            createdAt: new Date(),
        });

        // Find the users to send the note to
        const users = await User.findAll({
            where: { id: userIds },
        });

        // Send the note to each user
        users.forEach(async(user) => {
            // Send the note to the user using suitable messaging pattern
            // Example: sendNotification(user.id, note);
        });

        res.status(201).json({ message: 'Note sent successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// List the user's timeline notes in the last 30 days with non-disabled types
exports.listTimelineNotes = async(req, res) => {
    try {
        const { userId, typeFilter, page, limit } = req.query;
        const offset = (page - 1) * limit;

        // Query the notes with the given filters
        const notes = await Note.findAll({
            where: {
                createdAt: {
                    [Op.gte]: new Date(new Date() - 30 * 24 * 60 * 60 * 1000),
                },
                type: typeFilter,
            },
            offset,
            limit,
            order: [
                ['createdAt', 'DESC']
            ],
        });

        res.status(200).json({ notes });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// Soft delete one or more of the user's received notes
exports.deleteNotes = async(req, res) => {
    try {
        const { userId, noteIds } = req.body;

        // Delete the notes associated with the user
        await Note.destroy({
            where: {
                id: noteIds,
            },
        });

        res.status(200).json({ message: 'Notes deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};