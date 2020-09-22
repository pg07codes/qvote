const { Sequelize, DataTypes } = require('sequelize');
const dt = DataTypes;
const qvoteModel = require('./qvoteModel');

const db = new Sequelize('qvote', 'pg', 'pg', {
    host: 'localhost',
    dialect: 'mysql'
});

const Qvote = db.define('Qvote', qvoteModel);

db.sync({
    // alter:true,
    // force:true
}).then(() => console.log("db is synced"));

module.exports = { 
    db,
    Qvote
};