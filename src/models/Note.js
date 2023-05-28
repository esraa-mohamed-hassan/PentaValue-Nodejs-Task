const { DataTypes } = require('sequelize');
const db = require('../../config/database');
const NoteType = require('./NoteType');

const Note = db.define('Note', {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    message: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    type: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    mediaFiles: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
    },
});

Note.belongsTo(NoteType);

module.exports = Note;