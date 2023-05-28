const { Sequelize } = require('sequelize');

const db = new Sequelize('note-db', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
});

module.exports = db;