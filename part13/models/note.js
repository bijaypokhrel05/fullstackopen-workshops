const { DataTypes, Model } = require('sequelize');
const { sequelize } = require('../utils/db');


class Note extends Model {}

Note.init({
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        content: {
            type: DataTypes.STRING,
            allowNull: false
        },
        important: {
            type: DataTypes.BOOLEAN,
        },
        date: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        }
    }, {
        sequelize,
        underscored: true,
        timestamps: false,
        modelName: 'note'
})

module.exports = Note;