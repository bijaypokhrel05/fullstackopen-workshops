const Note = require('./note');
const User = require('./user');

Note.sync({alter: true});
User.sync({alter: true});

module.exports = {
    Note,
    User
};