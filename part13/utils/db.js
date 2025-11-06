const { Sequelize } = require('sequelize');
const { DATABASE_URL } = require('./config');
const { Note, User } = require('../models/index');

const sequelize = new Sequelize(DATABASE_URL, {
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    }
});

const connectToDatabase = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connected to database successfully');
    } catch(err) {
        console.log('Failed to connect to database');
        return process.exit();
    }

    return null;
};

module.exports = { connectToDatabase, sequelize };