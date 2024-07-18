const jwt = require('jsonwebtoken');
const secret = K7mC46ByU6d8n5zfG4EN3Adjxuin9eNlakK0MhtZ3diw4zRl9MwbBwrey1jF7k4P;

const authenticateJWT = (req, res, next) => {
    const token = req.header('Authorization');
    if (token) {
        jwt.verify(token.split(' ')[1], secret, (err, user) => {
            if (err) {
                return res.sendStatus(403);
            }
            req.user = user;
            next();
        });
    } else {
        res.sendStatus(401);
    }
};

module.exports = authenticateJWT;
