const { DataTypes } = require('sequelize');
const db = require('../../config/database');

const NoteType = db.define('NoteType', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    disabled: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    },
});

module.exports = NoteType;