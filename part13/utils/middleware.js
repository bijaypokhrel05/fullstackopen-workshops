const jwt = require('jsonwebtoken');
const { SECRET } = require('./config');

const tokenExtractor = async (req, res, next) => {
    const authorization = req.get('authorization');
    if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
        try {
            req.decodedToken = jwt.verify(authorization.substring(7), SECRET);
        } catch(err) {
            return res.status(401).json({error: 'invalid token'});
        }
    } else {
        return res.status(401).json({error: 'missing token'});
    }

    next();
};

module.exports = tokenExtractor;