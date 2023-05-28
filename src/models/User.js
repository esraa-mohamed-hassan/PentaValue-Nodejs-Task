const { DataTypes } = require('sequelize');
const db = require('../../config/database');

const User = db.define('User', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    profilePicture: {
        type: DataTypes.STRING,
        allowNull: true,
    },
});

module.exports = User;